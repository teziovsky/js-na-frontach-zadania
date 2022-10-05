import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export const orderController = Router();

orderController.get("", async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        clientId: res.locals.user.id,
      },
      include: {
        products: true,
        invoice: true,
      },
    });

    res.status(200).json({ orders });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

orderController.get("/:id", async (req: Request, res: Response) => {
  try {
    const order = await prisma.order.findFirst({
      where: {
        AND: [
          {
            id: {
              equals: Number(req.params.id),
            },
          },
          {
            clientId: {
              equals: res.locals.user.id,
            },
          },
        ],
      },
      include: {
        products: true,
        invoice: true,
      },
    });

    res.status(200).json({ ...order });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

orderController.post(
  "",
  body("products").custom((value) => {
    if (value.length === 0) {
      throw new Error("Products are required");
    }

    if (!Array.isArray(value)) {
      throw new Error("Products must be an array");
    }

    if (!value.every((product) => typeof product === "number")) {
      throw new Error("Products must be an array of numbers");
    }

    return true;
  }),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { products } = req.body;

      const productsArray = await prisma.product.findMany({
        where: {
          id: {
            in: products,
          },
        },
      });

      const mappedProducts = productsArray.map((product) => {
        return {
          price: product.price,
          product: {
            connect: {
              id: product.id,
            },
          },
        };
      });

      const [lastInvoice] = await prisma.invoice.findMany({
        select: {
          number: true,
        },
        orderBy: {
          number: "desc",
        },
        take: 1,
      });

      const order = await prisma.order.create({
        data: {
          client: {
            connect: {
              id: res.locals.user.id,
            },
          },
          products: {
            create: mappedProducts,
          },
          invoice: {
            create: {
              year: new Date().getFullYear(),
              number: lastInvoice.number + 1,
              client: {
                connect: {
                  id: res.locals.user.id,
                },
              },
            },
          },
        },
      });

      res.status(200).json({ order });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
);
