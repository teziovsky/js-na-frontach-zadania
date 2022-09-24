import prompts, { PromptObject } from "prompts";

const questions: PromptObject[] = [
  {
    type: "toggle",
    name: "generateData",
    message: "Czy wygenerować produkt z danymi fikcyjnymi?",
    initial: true,
    active: "tak",
    inactive: "nie",
  },
];

export async function askForGenerateData() {
  const answers = await prompts(questions);

  return {
    ...answers,
  };
}
