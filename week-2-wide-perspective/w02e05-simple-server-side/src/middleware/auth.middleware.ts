import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    const [_, token] = authHeader.split(" ");
    const { JWT_SECRET_TOKEN = "supersecret" } = process.env;

    const decodedToken = jwt.verify(token, JWT_SECRET_TOKEN);
    const { id, email } = decodedToken as { id: number; email: string };

    if (!decodedToken) {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      res.locals.user = {
        id,
        email,
      };
      next();
    }
  }
}
