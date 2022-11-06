/*
 * Tę funkcjonalność chcemy przetestować:
 * */

function notNumber(value, message) {
  if (typeof value !== "number") {
    throw new Error(message || "Value must be a number");
  }
}

export function divider(dividend, divisor, digits = 0) {
  notNumber(dividend, "Dividend must be a number");
  notNumber(divisor, "Divisor must be a number");
  if (divisor === 0) throw new Error("Cannot divide by 0");
  return (dividend / divisor).toFixed(digits);
}
