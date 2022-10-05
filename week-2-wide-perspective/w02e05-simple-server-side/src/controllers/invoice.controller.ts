import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();

export const invoiceController = Router();

invoiceController.get("", async (req: Request, res: Response) => {
  try {
    const invoices = await prisma.invoice.findMany({
      where: {
        clientId: res.locals.user.id,
      },
      include: {
        order: true,
      },
    });

    res.status(200).json({ invoices });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

invoiceController.get("/:id", async (req: Request, res: Response) => {
  try {
    const invoice = await prisma.invoice.findFirst({
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
        order: true,
      },
    });

    res.status(200).json({ ...invoice });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
