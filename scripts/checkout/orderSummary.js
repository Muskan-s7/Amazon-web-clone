import { cart, removefromcart, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js"; // Named export
import { priceInCents } from "../utils/money.js";
import {
  deliveryOptions,
  getDeliveryOption,
} from "../../data/deliveryoptions.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"; // Default export - we can use it when we want to export 1 thing
import { renderPaymentSuammary } from "./paymentSummary.js";

export function renderOrderSummary() {
  let cartSummaryHTML = "";
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingproduct = getProduct(productId);
    //The below set of code is to show the selected option for delivery
    // i.e, final delivery date on the check out page (starting from here)
    const deliveryOptionId = cartItem.deliveryOptionId;
    let deliveryOption = getDeliveryOption(deliveryOptionId);
    //The above variable is to show the selected option for delivery i.e, final delivery date
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM, D");

    //upto this line
    cartSummaryHTML += `     
      <div class="cart-item-container 
      js-cart-item-container
      js-cart-item-container-${matchingproduct.id}">
          <div class="delivery-date" >Delivery date:${dateString}</div>

          <div class="cart-item-details-grid">
              <img
              class="product-image"
              src="${matchingproduct.image}"
              /div>

              <div class="cart-item-details">
              <div class="product-name">
                  ${matchingproduct.name}
              </div>
              <div class="product-price">${matchingproduct.getPrice()}
              </div>
              <div class="product-quantity
              js-product-quantity-${matchingproduct.id}">
                  <span> Quantity: <span class="quantity-label">${
                    cartItem.quantity
                  }</span> </span>
                  <span class="update-quantity-link link-primary">
                  Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link
                  js-delete-link-${matchingproduct.id}"
                  data-product-id="${matchingproduct.id}">
                  Delete
                  </span>
              </div>
              </div>
              <div class="delivery-options">
              <div class="delivery-options-title">
                  Choose a delivery option:
              </div>
            ${deliveryOptionsHTML(matchingproduct, cartItem)}
              </div>  
          </div>
          </div>`;
  });

  //The Below function is used to set the delivery dates i.e., the day of delivery with respect to te cost
  function deliveryOptionsHTML(matchingproduct, cartItem) {
    let html = "";
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM, D");
      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${priceInCents(deliveryOption.priceCents)}`;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      /* By using the above condition for "isChecked" we can only select 1 option out of the 3 options
        delivery date*/
      html += `
      <div class="delivery-option js-delivery-option"
      data-product-id="${matchingproduct.id}"
      data-delivery-option-id="${deliveryOption.id}">
                  <input
                  type="radio"
                  ${isChecked ? "Checked" : ""}
                  class="delivery-option-input"
                  name="delivery-option-${matchingproduct.id}" />
                  <div>
                  <div class="delivery-option-date">${dateString}</div>
                  <div class="delivery-option-price">${priceString} - Shipping</div>
                  </div>
              </div>`;
    });
    return html;
  }
  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removefromcart(productId);
      renderPaymentSuammary(); // To display the changes in the paymentsummary (when we delete an item)
      const container_item = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container_item.remove();
    });
  });
  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      /*short-hand notation :
      const productId = element.dataset.productId;
      const deliveryOptionId = element.dataset.deliveryOptionId;*/

      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSuammary(); // To display the changes in the paymentSummary (when we select a diff delivery option)
    });
  });
  checkoutItems();
  //displaycartitem();
  function checkoutItems() {
    //This function is to show the checkout() items on the check out page
    let cartquantity = 0;
    cart.forEach((cartItem) => {
      cartquantity += cartItem.quantity;
      console.log(cartquantity);
    });
    document.querySelector(
      ".js-checkout-item"
    ).innerHTML = `${cartquantity} items`;
  }

  displaycartitem();
  function displaycartitem() {
    let cartquantity = 0;
    cart.forEach((cartItem) => {
      cartquantity += cartItem.quantity;
    });
    document.querySelectorAll(".js-delete-link").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(
          ".js-checkout-item"
        ).innerHTML = `${--cartquantity} items`;
        /*In the above ${cartquantity} I used "pre-decrement",cuz if I
  use post-decrement one item will be shown left [checkout(1) items] in
  the cart even after deleting all the items*/
        if (cartquantity === 1) {
          document.querySelector(
            ".js-checkout-item"
          ).innerHTML = `${cartquantity} item`;
        }
      });
    });
  }
}
