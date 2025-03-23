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
  - When users choose fast delivery, the payment total is recalculated automatically to include additional delivery charges. This change is reflected in real-time, so the user always sees the final cost based on their selection.
- **Tracking Page**: Users can track their order status, which displays real-time updates on the status of the order. 
- **Quantity Selection**: Users can select the quantity of items using a dropdown menu on the cart page. The total price updates automatically based on the quantity selected.
- **Buy Again Button**: The **Buy Again** button on the order page allows users to quickly add the same items from their previous order back into the cart for easy re-purchase.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: This project is connected to the backend of SuperSimpleDev(a YouTuber). It provides functionality for:
  - Fetching product data
  - Managing cart items
  - Handling checkout and payment calculations
- **Libraries/Frameworks**:
  - **Jasmine**: Used for unit testing to ensure the functionality of various features on the webpage (e.g., adding/removing items from the cart, managing checkout page and calculating totals).
  - **Delivery Date Calculation Library**: Used to calculate and display the estimated delivery date to the customer. The library helps determine the delivery date based on current date (day of order). You can find the library here: [dayjs/esm](https://unpkg.com/dayjs@1.11.10/esm/index.js).
- **Other**:
  - **Local Storage**: Used to persist the cart data even when the user refreshes the page.
  - **Product Data**: The product list is fetched from an external API (provided by the tutorial creator).

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Muskan-s7/Amazon-web-clone.git

   ```

## Acknowledgments

- This project was built by following a tutorial from SuperSimpleDev-(https://www.youtube.com/watch?v=EerdGm-ehJQ). I used resources provided in the tutorial, including the backend, libraries, and some guidance on structuring the project. While the tutorial served as a starting point, I have made modifications and added additional features, such as:

- **Checkout Page Modifications**: Implemented dynamic calculations for the number of items. The total updates automatically when an item is added or deleted from the cart.
- **Tracking Page**: Now fully developed, allowing users to track their orders in real-time.
- **Quantity Dropdown**: Added a dropdown feature for users to select the quantity of items on the cart page. The total price automatically updates based on the quantity selected.
- **Buy Again Button**: Implemented an interactive **Buy Again** button on the order page for quick re-purchase of previous orders.

This project allowed me to apply and expand my knowledge of web development, particularly in e-commerce functionality. I plan to further improve it with additional features, such as advanced payment integration and enhanced order tracking (such as real-time updates, notifications, or detailed order status).
