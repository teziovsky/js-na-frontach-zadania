import { ProductModel } from "../types";

export class Product implements ProductModel {
  id;
  name;
  count;
  price;
  type;

  constructor({ id, name, count, price, type }: ProductModel) {
    this.id = id;
    this.name = name;
    this.count = count;
    this.price = price;
    this.type = type;
  }
}