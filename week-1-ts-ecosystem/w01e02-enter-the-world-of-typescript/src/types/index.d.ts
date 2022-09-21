export type TagName = "p" | "div" | "section" | "article";

export interface Root {
  title: string;
  subTitle: string;
}

export interface Price {
  value: number;
  currency: string;
}

export interface Item {
  name: string;
  amount: number;
  unit: string;
  price: Price;
}

export interface Cart {
  heading?: string;
  items: Item[];
}