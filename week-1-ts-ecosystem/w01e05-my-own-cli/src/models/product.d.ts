export type ProductType = "buyNow" | "forFree" | "auction";

export type Product = {
  id: string;
  name: string;
  quantity: number;
  price?: number;
  type: ProductType;
};
