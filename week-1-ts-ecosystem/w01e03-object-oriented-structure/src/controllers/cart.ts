import { ProductModel, ProductType } from "../types";

export class Cart {
  private products: ProductModel[] = [];

  constructor(private readonly type: ProductType) {
    this.type = type;
  }

  addProduct(product: ProductModel) {
    if (this.type === product.type) {
      this.products.push(product);
    } else {
      // throw new Error("Product type is not correct");
      console.error('\x1b[31m%s\x1b[0m', `${product.name} type is not correct!`);
    }
  }

  getProducts() {
    return this.products;
  }

  getOneProduct(id: ProductModel["id"]) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: ProductModel["id"], product: ProductModel) {
    this.products = this.products.map(p => p.id === id ? product : p);
  }

  deleteProduct(id: ProductModel["id"]) {
    this.products = this.products.filter(product => product.id !== id);
  }

  getTotalPrice() {
    return this.products.reduce((acc, product) => acc + (product.price ? (product.price * product.count) : 0), 0);
  }

  getProductCount() {
    return this.products.length;
  }
}