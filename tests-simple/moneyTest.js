import { priceInCents } from "../scripts/utils/money.js";

console.log("Test Suite: pricecents to dollars");
//Above line -- grouping of related test cases called "Test Suite"

console.log("Converts cents into dollars"); //Giving name to make the code understandable

if (priceInCents(2025) === "20.25") {
  console.log("Passed");
} else {
  console.log("Failed");
}
console.log("Works with 0");

if (priceInCents(0) === "0.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}
console.log("Rounds up to the nearest cents");

if (priceInCents(2000.5) === "20.01") {
  console.log("Passed");
} else {
  console.log("Failed");
}
