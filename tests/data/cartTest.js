import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe("Test Suite: addToCart", () => {
  it("adds an existing product to the cart", () => {
    spyOn(localStorage, "setItem");
    // A mock lasts only for 1 tests .so we also have to mock "spyOn(loadFromStorage,'setItem')"
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1); //after we mock a method, we can check how make times it is called
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(2);
  });

  it("adds a new product to the cart", () => {
    spyOn(localStorage, "setItem");
    //what I did below is called "mock"
    //from here
    spyOn(localStorage, "getItem").and.callFake(() => {
      // spyOn() used to give a fake value, spyOn()is one of the methods in mock
      return JSON.stringify([]); // we use JSON.stringfy([]) cuz localstorage only support strings
    });
    //to here
    loadFromStorage();

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1); //after we mock a method, we can check how make times it is called
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
  });
});
