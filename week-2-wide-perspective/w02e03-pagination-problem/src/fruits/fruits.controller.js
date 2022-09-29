import { Router } from "express";
import { paginationMiddleware } from "../middlewares/pagination.middleware.js";
import { fruitsRepository } from "./fruits.repository.js";

export const fruitsController = new Router();

fruitsController.get("", paginationMiddleware("drop"), (req, res) => {
  const fruits = fruitsRepository.find(req.pagination);
  res.json(fruits);
});

fruitsController.get("/:id", (req, res) => {
  const { id } = req.params;
  const fruit = fruitsRepository.findOne({ id: Number(id) });
  res.json(fruit || {});
});
