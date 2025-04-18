import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],

  cart: [
    {
      pizzaId: 7,
      name: "mediterranean",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
  ],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity: (state, action) => {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
