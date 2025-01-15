import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth-slice";
import wishlist from "./slices/wishlistSlice";
import cart from "./slices/cart-slice";

export default combineReducers({
  auth,
  wishlist,
  cart,
});
