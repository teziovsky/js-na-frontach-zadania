import { divider } from "./divider";

describe("divider", () => {
  it("should divide two numbers", () => {
    const result = divider(10, 2);
    expect(result).toBe(5);
  });

  it("should throw an error when divisor is 0", () => {
    expect(() => divider(10, 0)).toThrowError();
  });
});