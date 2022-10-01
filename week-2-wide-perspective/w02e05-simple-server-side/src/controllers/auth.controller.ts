import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();

export const authController = Router();

authController.post(`/signup`, async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const result = await prisma.client.create({
    data: {
      name,
      email,
    },
  });

  res.json(result);
});
