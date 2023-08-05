import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

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
  getUserWishlist,
  updateProfile,
  createOrder,
  getUserOrders,
};
