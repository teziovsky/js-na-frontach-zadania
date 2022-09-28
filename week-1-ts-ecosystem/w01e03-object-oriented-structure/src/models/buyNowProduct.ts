import { BaseProduct } from "./baseProduct";

export class BuyNowProduct extends BaseProduct {
  constructor(id: number, name: string, count: number, public price: number, public type: "Buy Now") {
    super(id, name, count)
  }
}