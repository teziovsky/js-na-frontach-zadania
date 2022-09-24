import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Product, ProductType } from "../models/product";

export async function saveToFile(type: ProductType, data: Product[]) {
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), "../persistent-data/cart-items.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const fileJSON = JSON.parse(file);

  fileJSON[type].push(...data);

  fs.writeFileSync(filePath, JSON.stringify(fileJSON, null, 2));

  console.log();
  console.log("Zapisano dane do pliku 🎉");
}
