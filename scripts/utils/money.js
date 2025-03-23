export function priceInCents(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
  //Adding Math.round() to fix the issue with rounding the value of numbers(cost)
}
