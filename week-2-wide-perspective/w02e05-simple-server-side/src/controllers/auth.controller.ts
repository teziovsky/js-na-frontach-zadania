import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const authController = Router();

authController.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.client.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { JWT_SECRET_TOKEN = "supersecret" } = process.env;

    const token = jwt.sign({ email }, JWT_SECRET_TOKEN, { expiresIn: "1d" });

    res.status(201).json({ user, access_token: token });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

authController.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.client.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const { JWT_SECRET_TOKEN = "supersecret" } = process.env;

    const token = jwt.sign({ email }, JWT_SECRET_TOKEN, { expiresIn: "1d" });

    res.status(200).json({ user, access_token: token });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
