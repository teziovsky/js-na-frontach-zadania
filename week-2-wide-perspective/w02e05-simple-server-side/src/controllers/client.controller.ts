import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();

export const clientController = Router();

clientController.get("", async (req: Request, res: Response) => {
  try {
    const clients = await prisma.client.findMany();

    res.status(200).json({ clients });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

clientController.get("/me", async (req: Request, res: Response) => {
  try {
    const me = await prisma.client.findUnique({
      where: {
        email: res.locals.email,
      },
    });

    res.status(200).json({ ...me });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
