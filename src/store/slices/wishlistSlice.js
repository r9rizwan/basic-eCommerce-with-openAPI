import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    newCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.wishlist.push(action.payload);
      state.newCount += 1;
    },
    removeItem: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      if (state.newCount > 0) state.newCount -= 1;
    },
    resetNewCount: (state) => {
      state.newCount = 0;
    },
  },
});

export const { addItem, removeItem, resetNewCount } = wishlistSlice.actions;
export default wishlistSlice.reducer;
