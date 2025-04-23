import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="px-3 py-2 text-xl text-black bg-orange-400 rounded-xl uppercase cursor-pointer hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      Delete
    </button>
  );
};

export default DeleteItem;
