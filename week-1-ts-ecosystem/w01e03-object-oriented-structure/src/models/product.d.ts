export type ProductType = "Buy Now" | "Auction" | "Free";

export interface ProductModel<TYPE extends ProductType> {
  id: number;
  name: string;
  count: number;
  price?: TYPE extends "Buy Now" | "Auction" ? number : never;
  type: TYPE;
}
