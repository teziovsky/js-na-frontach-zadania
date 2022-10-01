import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).send("Unauthorized");
  } else {
    const [_, token] = authHeader.split(" ");
    const { JWT_SECRET_TOKEN = "supersecret" } = process.env;

    const decodedToken = jwt.verify(token, JWT_SECRET_TOKEN);
    const { email } = decodedToken as { email: string };

    if (!decodedToken) {
      res.status(401).send("Unauthorized");
    } else {
      res.locals.email = email;
      next();
    }
  }
}
