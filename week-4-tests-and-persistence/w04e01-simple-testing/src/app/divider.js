/*
 * Tę funkcjonalność chcemy przetestować:
 * */
export function divider(dividend, divisor) {
  if (typeof divisor !== "number") throw new Error("Divisor must be a number");
  if (typeof dividend !== "number") throw new Error("Dividend must be a number");
  if (divisor === 0) throw new Error("Cannot divide by 0");
  return dividend / divisor;
}
