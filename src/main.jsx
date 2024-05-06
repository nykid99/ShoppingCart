import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import Header from "./layouts/Header";
import DiscountBar from "./layouts/DiscountBar";
import Footer from "./layouts/Footer";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {index: true, element: <HomePage/>},
      {
        path: "/shop",
        element: <ShopPage/>,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
    <DiscountBar/>
    <RouterProvider router={routes} />
    <Footer/>
  </React.StrictMode>
);