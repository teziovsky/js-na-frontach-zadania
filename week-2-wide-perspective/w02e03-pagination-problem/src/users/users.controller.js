import { Router } from "express";
import { paginationMiddleware } from "../middlewares/pagination.middleware.js";
import { usersRepository } from "./users.repository.js";

export const usersController = new Router();

usersController.get("", paginationMiddleware, (req, res) => {
  const users = usersRepository.find(req.pagination);
  res.json(users);
});

usersController.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = usersRepository.findOne({ id: Number(id) });
  res.json(user || {});
});
