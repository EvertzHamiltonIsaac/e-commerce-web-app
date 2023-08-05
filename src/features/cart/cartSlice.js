import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { cartService } from "./cartService";
import { toast } from "react-toastify";

//! Format Of Slices
// export const getCoupons = createAsyncThunk(
//     "coupon/",
//     async (_, { rejectWithValue }) => {
//       try {
//         return await couponService.getCoupons();
//       } catch (error) {
//         return rejectWithValue(error.response.data.message);
//       }
//     }
//   );

export const resetCartState = createAction("resetCartState");

export const addToCart = createAsyncThunk(
  "user/create-cart",
  async (cartData, { rejectWithValue }) => {
    try {
      return await cartService.addToCart(cartData);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getCart = createAsyncThunk(
  "user/cart",
  async (_, { rejectWithValue }) => {
    try {
      return await cartService.getCart();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const removeProductFromCart = createAsyncThunk(
  "user/deleteFromCart/:id",
  async (cartItemId, { rejectWithValue }) => {
    try {
      return await cartService.removeProductFromCart(cartItemId);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProductFromCart = createAsyncThunk(
  "user/updateFromCart/:id",
  async (cartDetail, { rejectWithValue }) => {
    try {
      return await cartService.updateProductFromCart(cartDetail);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  cart: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartCreated = action.payload;
        if (state.isSuccess) {
          toast.info("Product Added To Cart Successfully");
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError) {
          toast.error(action.payload);
        }
      })
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartGetted = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError) {
          toast.error(action.payload);
        }
      })
      .addCase(removeProductFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.productRemovedFromCart = action.payload;
      })
      .addCase(removeProductFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError) {
          toast.error(action.payload);
        }
      })
      .addCase(updateProductFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.productUpdatedFromCart = action.payload;
      })
      .addCase(updateProductFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError) {
          toast.error(action.payload);
        }
      })
      .addCase(resetCartState, () => initialState);
  },
});

export default authSlice.reducer;
