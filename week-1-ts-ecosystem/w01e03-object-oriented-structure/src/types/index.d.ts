export type ProductType = "Buy Now" | "Auction" | "Free";

export interface ProductModel {
  id: number;
  name: string;
  count: number;
  price?: number;
  type: ProductType;
}
