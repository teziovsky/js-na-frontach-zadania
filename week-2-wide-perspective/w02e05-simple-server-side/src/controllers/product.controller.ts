import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

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
