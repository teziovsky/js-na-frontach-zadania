import { BaseProduct } from "./baseProduct";

export class FreeProduct extends BaseProduct {
  constructor(id: number, name: string, count: number, public type: "Free") {
    super(id, name, count)
  }
}