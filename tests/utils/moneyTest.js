import { priceInCents } from "../../scripts/utils/money.js";

describe("Test Suite: pricecents to dollars", () => {
  // "describe()" is used to name the test suite
  it("converts cents into dollars", () => {
    // "it()" is used to name the test case
    expect(priceInCents(2095)).toEqual("20.95");
    // "expect()" is used to compare
  });
  it("works with zero", () => {
    expect(priceInCents(0)).toEqual("0.00");
  });
  it("Rounds up to the nearest cents", () => {
    expect(priceInCents(2000.5)).toEqual("20.01");
  });
});
