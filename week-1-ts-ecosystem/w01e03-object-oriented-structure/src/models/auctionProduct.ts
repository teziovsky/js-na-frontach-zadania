import { BaseProduct, ProductType } from "./baseProduct";

export class AuctionProduct extends BaseProduct {
  public type: Extract<ProductType, "Auction"> = "Auction";

  constructor(id: number, name: string, count: number, public price: number) {
    super(id, name, count);
  }

  getTotalPrice() {
    return this.price * this.count;
  }
}