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

const buyNowCart = new Cart<BuyNowProduct>();

const book = new BuyNowProduct(1, "Book", 2, 100);
const folder = new BuyNowProduct(2, "Folder", 5, 10);
const notebook = new BuyNowProduct(3, "Notebook", 10, 8);
const tablet = new AuctionProduct(4, "Tablet", 2, 5900);

buyNowCart.addProduct(book);
buyNowCart.addProduct(folder);
buyNowCart.addProduct(notebook);
// buyNowCart.addProduct(tablet); // Error: Type '"Auction"' is not assignable to type '"Buy Now"'.

console.log();
console.log("----------------------CART BUY NOW---------------------");
console.log("Cart 1 – Products: ", buyNowCart.getProducts());
console.log("Cart 1 – Number of products in cart: ", buyNowCart.getProductCount());
console.log("Cart 1 – Sum of products price in cart: ", buyNowCart.getTotalPrice());
console.log("-------------------------------------------------------");
console.log();

const auctionCart = new Cart<AuctionProduct>();

const smartphone = new AuctionProduct(1, "Smartphone", 10, 6499);
const smartwatch = new AuctionProduct(2, "Smartwatch", 50, 1999);
const headphones = new AuctionProduct(3, "Headphones", 100, 299);

auctionCart.addProduct(smartphone);
auctionCart.addProduct(smartwatch);
auctionCart.updateProduct(2, headphones);
auctionCart.deleteProduct(1);

console.log();
console.log("----------------------CART AUCTION---------------------");
console.log("Cart 2 – Products: ", auctionCart.getProducts());
console.log("Cart 2 – Number of products in cart: ", auctionCart.getProductCount());
console.log("Cart 2 – Sum of products price in cart: ", auctionCart.getTotalPrice());
console.log("-------------------------------------------------------");
console.log();

const freeCart = new Cart<FreeProduct>();

const pen = new FreeProduct(1, "Pen", 2);
const crayons = new FreeProduct(2, "Crayons", 5);
const markers = new FreeProduct(3, "Markers", 10);
const plasticine = new FreeProduct(4, "Plasticine", 8);

freeCart.addProduct(pen);
freeCart.addProduct(crayons);
freeCart.addProduct(markers);
freeCart.addProduct(plasticine);

console.log();
console.log("----------------------CART FREE---------------------");
console.log("Cart 3 – Products: ", freeCart.getProducts());
console.log("Cart 3 – First Product: ", freeCart.getOneProduct(1));
console.log("Cart 3 – Number of products in cart: ", freeCart.getProductCount());
console.log("Cart 3 – Sum of products price in cart: ", freeCart.getTotalPrice());
console.log("----------------------------------------------------");
console.log();