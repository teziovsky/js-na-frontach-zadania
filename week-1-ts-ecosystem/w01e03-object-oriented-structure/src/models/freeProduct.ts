import { BaseProduct, ProductType } from "./baseProduct";

export class FreeProduct extends BaseProduct {
  public type: Extract<ProductType, "Free"> = "Free";

  constructor(id: number, name: string, count: number) {
    super(id, name, count);
  }

  getTotalPrice() {
    return 0;
  }
}