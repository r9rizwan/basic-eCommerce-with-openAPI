import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    newCount: 0,
  },
  reducers: {
    addToCard: (state, action) => {
      state.cart.push(action.payload);
      state.newCount += 1;
    },
    updateCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        if (quantity >= item.quantity) {
          state.cart = state.cart.filter((item) => item.id !== id);
          if (state.newCount > 0) {
            state.newCount -= 1;
          }
        } else {
          item.quantity -= quantity;
        }
      }
    },
    resetNewCount: (state) => {
      state.newCount = 0;
    },
  },
});

export const { addToCard, updateCartItem, removeFromCart, resetNewCount } = cartSlice.actions;
export default cartSlice.reducer;
