# ShoppyGlobe E-commerce Application

## Project Overview

ShoppyGlobe is a basic e-commerce web application built using **React with Vite**. The application allows users to browse products, view product details, add items to a shopping cart, manage quantities, and place an order through a checkout page.

---

# Features

### Product Listing

* Fetch products from API:
  `https://dummyjson.com/products`
* Display products in a responsive grid layout
* Lazy load product images for better performance

### Product Detail Page

* Dynamic route using product ID
* Fetch and display detailed information about a product

### Search Functionality

* Search products using a search bar
* Implemented using **Redux state**

### Shopping Cart

* Add products to cart
* Remove products from cart
* Increase and decrease product quantity
* Prevent quantity from going below 1

### Checkout Page

* Display order summary including:

  * Product image
  * Product title
  * Quantity
* Collect user information through a dummy form
* "Place Order" button
* Display **Order placed** message
* Automatically clear cart and redirect to Home page

### Routing

Implemented using **createBrowserRouter** from React Router.

Routes included:

* Home (`/`)
* Product Detail (`/product/:id`)
* Cart (`/cart`)
* Checkout (`/checkout`)
* NotFound (`*`)

### 404 Page

Displays a proper message when the user navigates to an invalid route.

### Performance Optimization

* Code splitting using **React.lazy**
* Lazy loading with **Suspense**
* Lazy loading of images

### Responsive UI

* Clean and responsive CSS styling
* Works across different screen sizes

---

# Technologies Used

* React
* Vite
* React Router DOM
* Redux Toolkit
* React Redux
* JavaScript 
* CSS

---

# Installation and Setup Instructions

Follow the steps below to run the project locally.

### 1. Clone the repository

```
git clone https://github.com/deepak-0103/shoppyglobe.git
```

### 2. Navigate to the project folder

```
cd shoppyglobe
```

### 3. Install dependencies

```
npm install
```

### 4. Run the development server

```
npm run dev
```

### 5. Open in browser

```
http://localhost:5173
```

---

# API Used

Product data is fetched from the following API:

```
https://dummyjson.com/products
```

---

# Key React Concepts Used

* Functional Components
* Props
* React Hooks

  * useState
  * useEffect
  * custom hooks
* Redux Toolkit
* React Router (createBrowserRouter)
* Lazy Loading with React.lazy
* Suspense
* Event Handling
* Conditional Rendering

---

