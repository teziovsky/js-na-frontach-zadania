import { divider } from "./divider";

describe("divider", () => {
  it("should divide two numbers", () => {
    const result = divider(10, 2);
    expect(result).toBe(5);
  });

  it("should return 0 if dividend is 0", () => {
    const result = divider(0, 2);
    expect(result).toBe(0);
  });

  it("should throw an error when divisor is not number", () => {
    expect(() => divider(10, "a")).toThrowError();
  });

  it("should throw an error when dividend is not number", () => {
    expect(() => divider("a", 10)).toThrowError();
  });

  it("should throw an error when divisor is 0", () => {
    expect(() => divider(10, 0)).toThrowError();
  });
});