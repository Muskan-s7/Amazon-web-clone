import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSuammary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCartFetch } from "../data/cart.js";
//import "../data/cart-class.js";
//import "../data/backend-practice.js";

//promise is a built in class, when we create a promise we need to give a funciton
//when we create a promise it's going to run the function immediately

async function loadPage() {
  try {
    // throw "error1";  // to manually create error
    /* await loadProductsFetch();
    const value = await new Promise((resolve, reject) => {
      // throw "error2";  // 1st way to manually create an error
      loadCart(() => {
        // reject("error3"); // throw can't be used to create an error in future. so we use reject()
        resolve("value3");
      });
    });*/
    await Promise.all([loadProductsFetch(), loadCartFetch()]);
  } catch (error) {
    console.log("Unexpected error occured. Please try again later");
  }

  renderOrderSummary();
  renderPaymentSuammary();
}
loadPage();

/*
//promise.all let's us run multiple promises at once
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve(); // By using resolve we can wait for the step to finish and then move to the next step
    });
  }),
]).then(() => {
  renderOrderSummary();
  renderPaymentSuammary();
});
*/
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
})
  .then(() => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSuammary();
  });
*/

/*
 loading cart using callback ---> using multiple callbacks (nested callbacks)
  makes the code complex, so we use promises to make the code simple & effective
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSuammary();
  });
});*/
