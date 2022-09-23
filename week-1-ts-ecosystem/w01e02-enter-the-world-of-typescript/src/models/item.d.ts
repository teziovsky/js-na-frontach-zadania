import { Price } from "@/types";

export interface Item {
  name: string;
  amount: number;
  unit: string;
  price: Price;
}