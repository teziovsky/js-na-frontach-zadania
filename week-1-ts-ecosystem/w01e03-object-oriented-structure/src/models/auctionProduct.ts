import { BaseProduct } from "./baseProduct";

export class AuctionProduct extends BaseProduct {
  constructor(id: number, name: string, count: number, public price: number, public type: "Auction") {
    super(id, name, count)
  }
}