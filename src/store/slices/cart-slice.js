import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    newCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.newCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    updateCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        state.newCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
      }
    },
    removeFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        // If the quantity to remove is less than or equal to the current quantity:
        if (state.cart[itemIndex].quantity > quantity) {
          state.cart[itemIndex].quantity -= quantity;
        } else {
          // If removing the quantity would result in 0 or negative, remove the item entirely
          state.cart.splice(itemIndex, 1);
        }
        state.newCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
      }
    },
    resetNewCount: (state) => {
      state.newCount = 0;
    },
  },
});

export const { addToCart, updateCartItem, removeFromCart, resetNewCount } = cartSlice.actions;
export default cartSlice.reducer;