import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { authService } from "./authService";
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

export const resetAuthState = createAction("resetAuthState");

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (body, { rejectWithValue }) => {
    try {
      return await authService.forgotPassword(body);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword/:token",
  async (resetPasswordData, { rejectWithValue }) => {
    try {
      return await authService.resetPassword(resetPasswordData);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  userInfo: {},
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
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userRegistered = action.payload;
        if (state.isSuccess) {
          toast.info("User Registered Successfully");
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError) {
          toast.error(action.payload);
        }
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userLogged = action.payload;
        if (state.isSuccess) {
          toast.info("User Logged Successfully");
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError) {
          toast.error(action.payload);
        }
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userLogged = action.payload;
        if (state.isSuccess) {
          toast.info("Email sent Successfully");
        }
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError) {
          toast.error(action.payload);
        }
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.passwordReset = action.payload;
        if (state.isSuccess) {
          toast.info("User Registered Successfully");
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError) {
          toast.error(action.payload);
        }
      })
      .addCase(resetAuthState, () => initialState);
  },
});

export default authSlice.reducer;
