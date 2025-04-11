import React from "react";
import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Home from "./Home";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log("isLoading", isLoading);
  return (
    <div className="grid  grid-rows-[auto_1fr_auto] h-screen">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-scroll">
          <main className="mx-auto max-w-3xl">
            {/* <Home /> */}
            <Outlet />
          </main>
        </div>
      )}
      <CartOverview />
    </div>
  );
};

export default AppLayout;
