export type ProductType = "Buy Now" | "Auction" | "Free";

export abstract class BaseProduct {
  public abstract type: ProductType;

  protected constructor(public id: number, public name: string, public count: number) {
  }

  abstract getTotalPrice(): number;
}