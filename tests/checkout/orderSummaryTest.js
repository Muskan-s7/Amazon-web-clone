import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";
import { loadProducts, loadProductsFetch } from "../../data/products.js";
/*2 things to test :
  1. How the page looks
  2. How the page behaves
 */
describe("Test Suite: renderOrderSummary", () => {
  const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
  const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
  // it's a beforeEach Hook - by using this we can run each test before of our test
  // and we use "afterEach Hook" - by using this we can run each test before of our test
  beforeAll((done) => {
    loadProductsFetch().then(() => {
      done();
    });
  });
  /*loadProducts() is an asynchronus function i.e, it doesn't wait for the response.
    so to fix this we use done().
    It is function provided by jasmine.
     */
  // If we don't call done() we will just keep waiting forever.done() allows to control when to go the nxt step
  beforeEach(() => {
    spyOn(localStorage, "setItem");
    document.querySelector(
      ".js-test-container"
    ).innerHTML = `<div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>`;
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: "2",
        },
      ]);
    });
    loadFromStorage();
    renderOrderSummary();
  });
  it("displays the cart", () => {
    expect(document.querySelector(".js-cart-item-container").length).toEqual(2);
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain("Quantity: 2");
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain("Quantity: 1");
    document.querySelector(".js-test-container").innerHTML = "";
  });
  it("Removes a product", () => {
    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(document.querySelector(".js-cart-item-container").length).toEqual(1);
    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`).length
    ).toEqual(null);
    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`).length
    ).not.toEqual(null);
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);
    document.querySelector(".js-test-container").innerHTML = "";
  });
});
