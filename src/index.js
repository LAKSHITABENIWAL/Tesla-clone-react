import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Modelx from "./Pages/Modelx";
import Models from "./Pages/Models";
import Crimetruck from "./Pages/Crimetruck";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Homepage />
      </App>
    ),
  },
  {
    path: "modelx",
    element: (
      <App>
        <Modelx />
      </App>
    ),
  },
  {
    path: "models",
    element: (
      <App>
        <Models />
      </App>
    ),
  },
  {
    path: "Crimetruck",
    element: (
      <App>
        {" "}
        <Crimetruck />
      </App>
    ),
  },
  {
    path: "/shop",
    element: (
      <App>
        <Shop />
      </App>
    ),
  },
  {
    path: "/cart",
    element: (
      <App>
        <Cart />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster />
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
