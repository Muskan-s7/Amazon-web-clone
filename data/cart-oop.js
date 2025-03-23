function Cart(localStorageKey) {
  /* we use 'localStorageKey' to separate the carts (cart & businessCart) loading from the same key.
   so they can have diff data*/
  const cart = {
    cartItems: undefined,
    //loadFromStorage :function(){} ---> this the syntax for the below function
    //loadFromStorage(){} ---> Short-hand Method syntax
    loadFromStorage() {
      // Using "this" cuz even if we change the name of object(i.e,cart) that won't effect the code

      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
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
    },
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
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
    },
    removefromcart(productId) {
      const newcart = [];
      this.cartItems.forEach((item) => {
        if (item.productId !== productId) {
          newcart.push(item);
        }
      });
      cart = newcart;
      this.saveToStorage();
    },
    updateDeliveryOption(productId, deliveryOptionId) {
      let matching;
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matching = cartItem;
        }
      });

      matching.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
    },
  };
  return cart;
}

const cart = Cart("cart-oop");
const businessCart = Cart("cart-business");
cart.loadFromStorage();

businessCart.loadFromStorage();
console.log(cart);
console.log(businessCart);
