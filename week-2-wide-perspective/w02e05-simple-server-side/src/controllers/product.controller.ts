import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export const productController = Router();

productController.get("", async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();

    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

productController.get("/:id", async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({ ...product });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

productController.put(
  "/:id",
  body("name").isString(),
  body("price").isNumeric(),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, price } = req.body;

      const product = await prisma.product.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          name,
          price,
        },
      });

      res.status(200).json({ ...product });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
);
