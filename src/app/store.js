import { configureStore } from "@reduxjs/toolkit";


import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";
import blogReducer from "../features/blogs/blogSlice";
import contactReducer from "../features/contact/contactSlice";
import subTotalReducer from "../features/global/globalSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    blog: blogReducer,
    contact: contactReducer,
    subTotal: subTotalReducer,
  },
});
