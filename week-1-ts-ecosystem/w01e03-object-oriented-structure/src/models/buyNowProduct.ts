import { BaseProduct, ProductType } from "./baseProduct";

export class BuyNowProduct extends BaseProduct {
  public type: Extract<ProductType, "Buy Now"> = "Buy Now";

  constructor(id: number, name: string, count: number, public price: number) {
    super(id, name, count);
  }

  getTotalPrice() {
    return this.price * this.count;
  }
}