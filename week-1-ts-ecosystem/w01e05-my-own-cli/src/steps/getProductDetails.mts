import { faker } from "@faker-js/faker/locale/pl";
import prompts, { PromptObject } from "prompts";
import { ProductType } from "../models/product";

export const questions: PromptObject[] = [
  {
    type: "text",
    name: "name",
    message: "Podaj nazwę produktu: ",
  },
  {
    type: "number",
    name: "quantity",
    message: "Podaj ilość: ",
  },
  {
    type: "number",
    name: "price",
    message: "Podaj cenę jednostkową: ",
    float: true,
  },
];

export async function getProductDetails(type: ProductType) {
  const { name, quantity, price } = await prompts(questions);

  const item = {
    id: faker.datatype.uuid(),
    name,
    quantity,
    price,
    type,
  };
}
