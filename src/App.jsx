import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  { path: "/order/new", element: <CreateOrder /> },
  { path: "/order/:id", element: <Order /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
