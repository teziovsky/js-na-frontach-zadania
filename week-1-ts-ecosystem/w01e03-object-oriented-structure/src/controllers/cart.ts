import { ProductModel, ProductType } from "../models/product";

export class Cart<TYPE extends ProductType> {
  private products: ProductModel<TYPE>[] = [];

  addProduct(product: ProductModel<TYPE>) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getOneProduct(id: ProductModel<TYPE>["id"]) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: ProductModel<TYPE>["id"], product: ProductModel<TYPE>) {
    this.products = this.products.map(p => p.id === id ? product : p);
  }

  deleteProduct(id: ProductModel<TYPE>["id"]) {
    this.products = this.products.filter(product => product.id !== id);
  }

  getTotalPrice() {
    return this.products.reduce((acc, product) => acc + (product.price ? (product.price * product.count) : 0), 0);
  }

  getProductCount() {
    return this.products.length;
  }
}