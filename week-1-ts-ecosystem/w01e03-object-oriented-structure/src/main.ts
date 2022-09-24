import { Cart, Product } from "./controllers";

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

const cart1 = new Cart<"Buy Now">();

const book = new Product<"Buy Now">({ id: 1, name: "Book", count: 2, price: 100, type: "Buy Now" });
const folder = new Product<"Buy Now">({ id: 2, name: "Folder", count: 5, price: 10, type: "Buy Now" });
const notebook = new Product<"Buy Now">({ id: 3, name: "Notebook", count: 10, price: 8, type: "Buy Now" });
const tablet = new Product<"Auction">({ id: 4, name: "Tablet", count: 2, price: 5900, type: "Auction" });

cart1.addProduct(book);
cart1.addProduct(folder);
cart1.addProduct(notebook);
// cart1.addProduct(tablet); // Error: Type '"Auction"' is not assignable to type '"Buy Now"'.

console.log();
console.log("----------------------CART 1---------------------");
console.log("Cart 1 – Products: ", cart1.getProducts());
console.log("Cart 1 – Number of products in cart: ", cart1.getProductCount());
console.log("Cart 1 – Sum of products price in cart: ", cart1.getTotalPrice());
console.log("-------------------------------------------------");
console.log();

const cart2 = new Cart<"Auction">();

const smartphone = new Product<"Auction">({ id: 1, name: "Smartphone", count: 10, price: 6499, type: "Auction" });
const smartwatch = new Product<"Auction">({ id: 2, name: "Smartwatch", count: 50, price: 1999, type: "Auction" });
const headphones = new Product<"Auction">({ id: 3, name: "Headphones", count: 100, price: 299, type: "Auction" });

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

const cart3 = new Cart<"Free">();

const pen = new Product<"Free">({ id: 1, name: "Pen", count: 2, type: "Free" });
const crayons = new Product<"Free">({ id: 2, name: "Crayons", count: 5, type: "Free" });
const markers = new Product<"Free">({ id: 3, name: "Markers", count: 10, type: "Free" });
const plasticine = new Product<"Free">({ id: 4, name: "Plasticine", count: 8, type: "Free" });

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