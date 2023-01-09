import { v4 as uuid } from "uuid";
import { getRandomInt } from "../utils/index.js";

export default {
  orders: [],
  getOrders() {
    return fetch("http://localhost:3001/orders")
      .then((response) => response.json())
      .then((orders) => {
        console.count("Counting fetch requests");
        this.orders = orders;
        return orders;
      });
  },
  getTotalOrders() {
    return this.orders.length;
  },
  getTotalIncome() {
    const totalIncome = this.orders.reduce((total, order) => total + order.sale, 0);
    return parseFloat(totalIncome).toFixed(2);
  },
  getBestSale() {
    const bestSale = this.orders.reduce((acc, order) => acc.sale > order.sale ? acc : order);
    return parseFloat(bestSale.sale).toFixed(2);
  },
  getOrdersByYear(year) {
    return this.orders.filter(order => order.orderDate.startsWith(year));
  },
  getLastOrderNumber() {
    const lastOrderNumber = this.orders.reduce((acc, order) => acc.orderNumber > order.orderNumber ? acc : order);
    return lastOrderNumber.orderNumber;
  },
  getNewOrderNumber() {
    const lastOrderNumber = this.getLastOrderNumber(this.orders);
    const [number, year] = lastOrderNumber.split("/");
    return `${parseInt(number) + 1}/${year}`;
  },
  async addOrder() {
    await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid(),
        orderNumber: this.getNewOrderNumber(this.orders),
        orderDate: new Date().toISOString(),
        sale: getRandomInt(10, 10000),
      }),
    });
  },
};