import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading page...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;