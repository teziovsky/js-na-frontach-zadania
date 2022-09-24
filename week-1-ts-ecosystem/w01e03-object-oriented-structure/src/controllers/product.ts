import { ProductModel, ProductType } from "../models/product";

export class Product<TYPE extends ProductType> {
  id;
  name;
  count;
  price;
  type;

  constructor({ id, name, count, price, type }: ProductModel<TYPE>) {
    this.id = id;
    this.name = name;
    this.count = count;
    this.price = price;
    this.type = type;
  }
}