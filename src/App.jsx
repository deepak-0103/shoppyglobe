import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header";

const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <ProductList />
        </Suspense>
      </>
    ),
  },

  {
    path: "/product/:id",
    element: (
      <>
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <ProductDetail />
        </Suspense>
      </>
    ),
  },

  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Cart />
        </Suspense>
      </>
    ),
  },

  {
    path: "/checkout",
    element: (
      <>
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Checkout />
        </Suspense>
      </>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;