import { products } from "./products.js";

export let cart;
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: "1",
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: "2",
      },
      {
        productId: "bc2847e9-5323-403f-b7cf-57fde044a955",
        quantity: 1,
        deliveryOptionId: "3",
      },
    ];
  }
}
loadFromStorage();
function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, quantity) {
  let matching;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matching = cartItem;
    }
  });
  if (matching) {
    matching.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
      deliveryOptionId: "1",
    });
  }
  saveToStorage();
}

export function checkoutItems() {
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

export function removeFromCart(productId) {
  const newcart = [];
  cart.forEach((item) => {
    if (item.productId !== productId) {
      newcart.push(item);
    }
  });
  cart = newcart;
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matching;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matching = cartItem;
    }
  });

  matching.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

export function calculateCartQuantity() {
  let cartquantity = 0;
  cart.forEach((cartItem) => {
    cartquantity += cartItem.quantity;
  });
  document.querySelector(".cart-quantity").innerHTML = cartquantity;
}

export function paymentItemsQuanitity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.quantity = newQuantity;
  saveToStorage();
}
/*
export function loadCart(fun) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => {
    console.log(xhr.response);
    fun();
  });
  xhr.open("GET", "https://supersimplebackend.dev/cart");
  xhr.send();
}
*/
export async function loadCartFetch() {
  const response = await fetch("https://supersimplebackend.dev/cart");
  const text = await response.text();
  console.log(text);
  return text;
}

export function resetCart() {
  cart = [];
  saveToStorage();
}
