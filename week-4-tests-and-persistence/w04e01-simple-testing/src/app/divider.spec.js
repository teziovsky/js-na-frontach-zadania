import { divider } from "./divider";

describe("divider", () => {
  it("should divide two numbers", () => {
    const result = divider(10, 2);
    expect(result).toBe("5");
  });

  it("should divide numbers with float value", () => {
    const result = divider(10, 2.5);
    expect(result).toBe("4");
  });

  it("should divide two numbers with float value", () => {
    const result = divider(5.2,  0.81, 5);
    expect(result).toBe("6.41975");
  });

  it("should return 0 if dividend is 0", () => {
    const result = divider(0, 2);
    expect(result).toBe("0");
  });

  it("should throw an error when divisor is not number", () => {
    expect(() => divider(10, "a")).toThrowError("Divisor must be a number");
  });

  it("should throw an error when dividend is not number", () => {
    expect(() => divider("a", 10)).toThrowError("Dividend must be a number");
  });

  it("should throw an error when divisor is 0", () => {
    expect(() => divider(10, 0)).toThrowError("Cannot divide by 0");
  });
});