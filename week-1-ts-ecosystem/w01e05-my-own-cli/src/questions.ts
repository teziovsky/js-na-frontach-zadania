import { PromptObject } from "prompts";

export const productTypeQuestions: PromptObject[] = [
  {
    type: "select",
    name: "productType",
    message: "Jaki produkt chcesz dodać?",
    choices: [
      { title: "Kup Teraz", value: "buyNow" },
      { title: "Za darmo", value: "forFree" },
      { title: "Aukcja", value: "auction" },
    ],
  },
  {
    type: "toggle",
    name: "generateData",
    message: "Czy wygenerować produkt z danymi fikcyjnymi?",
    initial: true,
    active: "tak",
    inactive: "nie",
  },
];

export const productDetailsQuestions: PromptObject[] = [
  {
    type: "text",
    name: "productName",
    message: "Podaj nazwę produktu: ",
  },
  {
    type: "number",
    name: "productQuantity",
    message: "Podaj ilość: ",
  },
  {
    type: "number",
    name: "productPrice",
    message: "Podaj cenę jednostkową: ",
    float: true,
  },
];
