import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./CartSlice";

const UpdateItemQuantitiy = ({ pizzaId, inCart }) => {
  const dispatch = useDispatch();
  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  const handleIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  return (
    <div className="gap-2 flex flex-col sm:flex-row items-center justify-between">
      <button
        onClick={handleDecrease}
        className="px-4 py-1 bg-amber-500 rounded-full text-3xl transition: transform hover:transition ease-in-out cursor-pointer hover:scale-110"
      >
        -
      </button>
      <span>{inCart}</span>
      <button
        onClick={handleIncrease}
        className="px-3 py-1 bg-amber-500 rounded-full text-3xl transition: transform hover:transition ease-in-out cursor-pointer hover:scale-110"
      >
        +
      </button>
    </div>
  );
};

export default UpdateItemQuantitiy;
