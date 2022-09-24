export type ProductType = "buyNow" | "forFree" | "auctions";

export type Product = {
  id: string;
  name: string;
  quantity: number;
  price?: number;
  type: ProductType;
};
