import { Cart } from "./controllers";
import { AuctionProduct } from "./models/auctionProduct";
import { BuyNowProduct } from "./models/buyNowProduct";
import { FreeProduct } from "./models/freeProduct";

/**
 * To tutaj mamy "START" programu.
 *
 * Przygotuj tutaj kawałek kodu potwierdzający poprawność działania koszyka.
 *
 * Np. Utwórz 3 różne koszyki — dodaj do nich różne produkty.
 * Potem wyświetl te produkty.
 * Wykaż, że koszyki mają różne produkty — inną ich ilość etc.
 * Przygotuj koszyki dla każdego rodzaju produktów.
 * - po prostu: wykaż, że przygotowana logika i modele danych — działają :)
 * */

const cart1 = new Cart<BuyNowProduct>();

const book = new BuyNowProduct(1, "Book", 2, 100, "Buy Now");
const folder = new BuyNowProduct(2, "Folder", 5, 10, "Buy Now");
const notebook = new BuyNowProduct(3, "Notebook", 10, 8, "Buy Now");
const tablet = new AuctionProduct(4, "Tablet", 2, 5900, "Auction");

cart1.addProduct(book);
cart1.addProduct(folder);
cart1.addProduct(notebook);
// cart1.addProduct(tablet); // Error: Argument of type 'AuctionProduct' is not assignable to parameter of type 'BuyNowProduct'.

console.log();
console.log("----------------------CART 1---------------------");
console.log("Cart 1 – Products: ", cart1.getProducts());
console.log("Cart 1 – Number of products in cart: ", cart1.getProductCount());
console.log("Cart 1 – Sum of products price in cart: ", cart1.getTotalPrice());
console.log("-------------------------------------------------");
console.log();

const cart2 = new Cart<AuctionProduct>();

const smartphone = new AuctionProduct(1, "Smartphone", 10, 6499, "Auction");
const smartwatch = new AuctionProduct(2, "Smartwatch", 50, 1999, "Auction");
const headphones = new AuctionProduct(3, "Headphones", 100, 299, "Auction");

cart2.addProduct(smartphone);
cart2.addProduct(smartwatch);
cart2.updateProduct(2, headphones);
cart2.deleteProduct(1);

console.log();
console.log("----------------------CART 2---------------------");
console.log("Cart 2 – Products: ", cart2.getProducts());
console.log("Cart 2 – Number of products in cart: ", cart2.getProductCount());
console.log("Cart 2 – Sum of products price in cart: ", cart2.getTotalPrice());
console.log("-------------------------------------------------");
console.log();

const cart3 = new Cart<FreeProduct>();

const pen = new FreeProduct(1, "Pen", 2, "Free");
const crayons = new FreeProduct(2, "Crayons", 5, "Free");
const markers = new FreeProduct(3, "Markers", 10, "Free");
const plasticine = new FreeProduct(4, "Plasticine", 8, "Free");

cart3.addProduct(pen);
cart3.addProduct(crayons);
cart3.addProduct(markers);
cart3.addProduct(plasticine);

console.log();
console.log("----------------------CART 3---------------------");
console.log("Cart 3 – Products: ", cart3.getProducts());
console.log("Cart 3 – First Product: ", cart3.getOneProduct(1));
console.log("Cart 3 – Number of products in cart: ", cart3.getProductCount());
console.log("Cart 3 – Sum of products price in cart: ", cart3.getTotalPrice());
console.log("-------------------------------------------------");
console.log();