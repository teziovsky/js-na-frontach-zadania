import { annualOrderTile } from "./orders/components/AnnualOrderTile.js";
import { orderTile } from "./orders/components/OrderTile.js";

import ordersService from "./orders/orders.service.js";

async function main() {
  const year = 2022;
  const totalOrders = ordersService.getTotalOrders();
  const totalIncomeOrders = ordersService.getTotalIncome();
  const bestSale = ordersService.getBestSale();
  const orders2022 = ordersService.getOrdersByYear(year);

  await orderTile("best-sale", bestSale);
  await orderTile("total-orders", totalOrders);
  await orderTile("total-income", totalIncomeOrders);
  await annualOrderTile("annual-orders", year, orders2022);
}

const button = document.querySelector("[data-button]");
button.addEventListener("click", async () => {
  await ordersService.addOrder();
  await main();
});

await main();
