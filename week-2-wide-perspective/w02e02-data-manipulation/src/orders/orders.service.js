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
  getTotalOrders(orders) {
    return orders.length;
  },
  getTotalIncome(orders) {
    const totalIncome = orders.reduce((total, order) => total + order.sale, 0);
    return parseFloat(totalIncome).toFixed(2);
  },
  getBestSale(orders) {
    const bestSale = orders.reduce((acc, order) => acc.sale > order.sale ? acc : order);
    return parseFloat(bestSale.sale).toFixed(2);
  },
  getOrdersByYear(orders, year) {
    return orders.filter(order => order.orderDate.startsWith(year));
  },
  getLastOrderNumber(orders) {
    const lastOrderNumber = orders.reduce((acc, order) => acc.orderNumber > order.orderNumber ? acc : order);
    return lastOrderNumber.orderNumber;
  },
  getNewOrderNumber(orders) {
    const lastOrderNumber = this.getLastOrderNumber(orders);
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