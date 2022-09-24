import chalk from "chalk";

export async function welcomeMessage() {
  console.clear();
  console.log();
  console.log(chalk.red.bold("\"Aplikacja do handlu\" strikes back 😱"));
  console.log();
}
