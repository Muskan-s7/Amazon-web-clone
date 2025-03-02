# Amazon-web-clone

This is a clone of the Amazon shopping website, built as a personal project to demonstrate web development skills. The project includes several key features like adding items to the cart, managing the cart, checkout functionality, payment calculations and more.

## Features

- **Product Listing**: Display a list of products with images, rating, and prices.
- **Add/Remove Items from Cart**: Users can add or remove items to/from the shopping cart.
- **Checkout Page**: A page where users can enter shipping details and can view all items added to the cart with quantity, price and can proceed to payment.
- **Payment Calculation**:
  - Calculates the total amount before and after tax.
  - Calculates shipping charges (free shipping or additional charges depending on the amount).
  - updates the total price dynamically when users select different delivery options.
  -  When users choose fast delivery, the payment total is recalculated automatically to include additional delivery charges. This change is reflected in real-time, so the user always sees the final cost based on their selection.
- **Tracking Page (Under Development)**: Users will be able to track their order status (currently in progress).

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: This project is connected to the backend of SuperSimpleDev(a youtuber). It provides functionality for:
  - Fetching product data
  - Managing cart items
  - Handling checkout and payment calculations
- **Libraries/Frameworks**:
  - **Jasmine**: Used for unit testing to ensure the functionality of various features on the webpage (e.g., adding/removing items from the cart, managing checkout page and calculating totals).
  -  **Delivery Date Calculation Library**: Used to calculate and display the estimated delivery date to the customer. The library helps determine the delivery date based on current date (day of order). You can find the library here: [dayjs/esm](https://unpkg.com/dayjs@1.11.10/esm/index.js).
- **Other**:
  - **Local Storage**: Used to persist the cart data even when the user refreshes the page.
  - **Product Data**:  The product list is fetched from an external API (provided by the tutorial creator).

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Muskan-s7/Amazon-web-clone.git
   
## Acknowledgments
-
This project was built by following a tutorial from SuperSimpleDev-(https://www.youtube.com/watch?v=EerdGm-ehJQ). I used resources provided in the tutorial, including the backend, libraries, and some guidance on structuring the project. While the tutorial served as a starting point, I have made modifications and added additional features, such as:

- **Checkout Page Modifications**: Implemented dynamic calculations for the number of items. The total updates automatically when an item is added or deleted from the cart.
- **Tracking Page**: Currently working on adding a tracking page feature to allow users to track their orders. (This feature is still a work in progress.)
- **Basic Modifications**: Implemented various small enhancements to improve user experience and functionality.

This project allowed me to apply and expand my knowledge of web development, particularly in e-commerce functionality. I plan to further improve it with additional features, such as advanced payment integration and better tracking options.
