import prompts, { PromptObject } from "prompts";

const questions: PromptObject[] = [
  {
    type: "select",
    name: "type",
    message: "Jaki produkt chcesz dodać?",
    choices: [
      { title: "Kup Teraz", value: "buyNow" },
      { title: "Za darmo", value: "forFree" },
      { title: "Aukcja", value: "auction" },
    ],
  },
];

export async function getProductType() {
  const answers = await prompts(questions);

  return {
    ...answers,
  };
}
