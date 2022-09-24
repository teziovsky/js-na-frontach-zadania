import { faker } from "@faker-js/faker/locale/pl";
import prompts, { PromptObject } from "prompts";
import { Product, ProductType } from "../models/product";

const questions: PromptObject[] = [
  {
    type: "select",
    name: "itemsCount",
    message: "Ile produktów wygenerować?",
    choices: [
      { title: "1", value: 1 },
      { title: "3", value: 3 },
      { title: "5", value: 5 },
      { title: "8", value: 8 },
    ],
  },
];

export async function generateProducts(type: ProductType) {
  const { itemsCount } = await prompts(questions);

  const items: Product[] = Array.from({ length: itemsCount }, () => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    quantity: faker.datatype.number({ min: 1, max: 10 }),
    price: type !== "forFree" ? parseFloat(faker.commerce.price()) : undefined,
    type,
  }));

  return items;
}
