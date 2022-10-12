import { annualOrderTile } from "./orders/components/AnnualOrderTile.js";
import { orderTile } from "./orders/components/OrderTile.js";

import OrdersService from "./orders/orders.service.js";

async function main() {
  const year = 2022;
  const orders = await OrdersService.getOrders();
  const totalOrders = OrdersService.getTotalOrders(orders);
  const totalIncomeOrders = OrdersService.getTotalIncome(orders);
  const bestSale = OrdersService.getBestSale(orders);
  const orders2022 = OrdersService.getOrdersByYear(orders, year);

  await orderTile("best-sale", bestSale);
  await orderTile("total-orders", totalOrders);
  await orderTile("total-income", totalIncomeOrders);
  await annualOrderTile("annual-orders", year, orders2022);
}

const button = document.querySelector("[data-button]");
button.addEventListener("click", async () => {
  await OrdersService.addOrder();
  await main();
});

await main();
