import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

// const register = async (userData) => {
//   try {
//     const response = await axios.post(`${base_url}auth/register`, userData);
//     if (response.data) {
//       localStorage.setItem("customer", JSON.stringify(response.data));
//     }
//     return response.data;
//   } catch (error) {
//     console.error("Error registering user:", error);
//     throw error;
//   }
// };

// const login = async (userData) => {
//   try {
//     const response = await axios.post(`${base_url}auth/login`, userData);
//     return response.data;
//   } catch (error) {
//     console.error("Error logging in:", error);
//     throw error;
//   }
// };

const getUserWishlist = async () => {
  try {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching user wishlist:", error);
    throw error;
  }
};


const updateProfile = async () => {
  try {
    const response = await axios.put(
      `${base_url}user/updateUser`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error Updating User:", error);
    throw error;
  }
};

const createOrder = async (orderDetail) => {
  try {
    const response = await axios.post(
      `${base_url}order/create-order`,
      orderDetail,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

const getUserOrders = async () => {
  try {
    const response = await axios.get(`${base_url}order/get-my-orders`, config);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const authService = {
  // register,
  // login,
  getUserWishlist,
  // addToCart,
  // getCart,
  // removeProductFromCart,
  // updateProductFromCart,
  updateProfile,
  createOrder,
  getUserOrders,
};
