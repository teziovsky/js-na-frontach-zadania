import fs from "fs";
import { ordersFakeData } from "../src/orders/orders.fake-data.js";

fs.writeFileSync("./src/orders/db.json", JSON.stringify({ orders: ordersFakeData }, null, 4));
