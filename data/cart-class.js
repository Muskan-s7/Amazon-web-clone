class Cart {
  cartItems; //cartItems = undefined;
  #localStorageKey;
  //# --> private ,which can only be used inside a class
  // without # , public property
  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }
  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
    if (!this.cartItems) {
      this.cartItems = [
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
  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }
  addToCart(productId) {
    let matching;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matching = cartItem;
      }
    });
    if (matching) {
      matching.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }
    this.saveToStorage();
  }
  removefromcart(productId) {
    const newcart = [];
    this.cartItems.forEach((item) => {
      if (item.productId !== productId) {
        newcart.push(item);
      }
    });
    cart = newcart;
    this.saveToStorage();
  }
  updateDeliveryOption(productId, deliveryOptionId) {
    let matching;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matching = cartItem;
      }
    });

    matching.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }
}

const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");

console.log(cart);
console.log(businessCart);
//object is an instance of a class
// to check the instance of a class we use
console.log(businessCart instanceof Cart);
