import { AuctionProduct } from "../models/auctionProduct";
import { BuyNowProduct } from "../models/buyNowProduct";
import { FreeProduct } from "../models/freeProduct";

export class Cart<TYPE extends BuyNowProduct | AuctionProduct | FreeProduct> {
  private products: TYPE[] = [];

  addProduct(product: TYPE) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getOneProduct(id: TYPE["id"]) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: TYPE["id"], product: TYPE) {
    this.products = this.products.map(p => p.id === id ? product : p);
  }

  deleteProduct(id: TYPE["id"]) {
    this.products = this.products.filter(product => product.id !== id);
  }

  getTotalPrice() {
    return this.products.reduce((acc, product) => acc + product.getTotalPrice(), 0).toFixed(2);
  }

  getProductCount() {
    return this.products.length;
  }
}