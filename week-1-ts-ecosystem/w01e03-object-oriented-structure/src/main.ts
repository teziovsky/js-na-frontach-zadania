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

const cart1 = new Cart("Buy Now");

const book = new Product({ id: 1, name: "Book", count: 2, price: 100, type: "Buy Now" });
const folder = new Product({ id: 2, name: "Folder", count: 5, price: 10, type: "Buy Now" });
const notebook = new Product({ id: 3, name: "Notebook", count: 10, price: 8, type: "Buy Now" });

cart1.addProduct(book);
cart1.addProduct(folder);
cart1.addProduct(notebook);

console.log();
console.log("cart1 – Number of products in cart: ", cart1.getProductCount());
console.log("cart1 – Sum of products price in cart: ", cart1.getTotalPrice());
console.log();

const cart2 = new Cart("Auction");

const smartphone = new Product({ id: 1, name: "Smartphone", count: 10, price: 6499, type: "Auction" });
const smartwatch = new Product({ id: 2, name: "Smartwatch", count: 50, price: 1999, type: "Auction" });

cart2.addProduct(smartphone);
cart2.addProduct(smartwatch);

console.log();
console.log("cart2 – Number of products in cart: ", cart2.getProductCount());
console.log("cart2 – Sum of products price in cart: ", cart2.getTotalPrice());
console.log();

const cart3 = new Cart("Free");

const pen = new Product({ id: 1, name: "Pen", count: 2, type: "Free" });
const crayons = new Product({ id: 2, name: "Crayons", count: 5, type: "Free" });
const markers = new Product({ id: 3, name: "Markers", count: 10, type: "Free" });
const plasticine = new Product({ id: 4, name: "Plasticine", count: 8, type: "Free" });

cart3.addProduct(pen);
cart3.addProduct(crayons);
cart3.addProduct(markers);
cart3.addProduct(plasticine);

console.log();
console.log("cart3 – Number of products in cart: ", cart3.getProductCount());
console.log("cart3 – Sum of products price in cart: ", cart3.getTotalPrice());
console.log();