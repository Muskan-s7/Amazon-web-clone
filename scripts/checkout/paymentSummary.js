import { cart, paymentItemsQuanitity, resetCart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryoptions.js";
import { priceInCents } from "../utils/money.js";
import { addOrders, orders } from "../../data/orders.js";
export function renderPaymentSuammary() {
  let productPriceCents = 0;
  let shipppingPricecents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shipppingPricecents += deliveryOption.priceCents;
  });
  //console.log(productPriceCents);
  //console.log(shipppingPricecents);
  const totalBeforeTaxCents = productPriceCents + shipppingPricecents; // cost of items + shipping charges
  const taxCents = totalBeforeTaxCents * 0.1; // 10% Tax
  const totalCents = totalBeforeTaxCents + taxCents; //total cost of the items with tax(i.e, after adding the tax)
  //console.log(totalCents);
  const paymentSummaryHTML = `
        <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">
            $${priceInCents(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
            $${priceInCents(shipppingPricecents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
            $${priceInCents(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
            $${priceInCents(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
            $${priceInCents(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
  `;
  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
  document
    .querySelector(".js-place-order")
    .addEventListener("click", async () => {
      try {
        const response = await fetch("https://supersimplebackend.dev/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: cart, //we can't send an object directly. so we need to convert it into a JSON string
          }),
          /*headers gives the backend more information about our request */
        });
        const order = await response.json();
        addOrders(order);
      } catch (error) {
        console.log("Unexpected error occured. try again");
      }
      resetCart();
      window.location.href = "orders.html";
    });
}
