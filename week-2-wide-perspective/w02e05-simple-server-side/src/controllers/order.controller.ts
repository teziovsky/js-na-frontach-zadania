import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();

export const orderController = Router();

orderController.get("", async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany();

    res.status(200).json({ orders });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

orderController.get("/:id", async (req: Request, res: Response) => {
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({ ...order });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
