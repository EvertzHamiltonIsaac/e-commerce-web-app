import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  try {
    const response = await axios.post(`${base_url}auth/register`, userData);
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(`${base_url}auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

const getUserWishlist = async () => {
  try {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching user wishlist:", error);
    throw error;
  }
};

const addToCart = async (cartData) => {
  try {
    const response = await axios.post(
      `${base_url}user/create-cart`,
      cartData,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

const getCart = async () => {
  try {
    const response = await axios.get(`${base_url}user/cart`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

const removeProductFromCart = async (cartItemId) => {
  try {
    const response = await axios.delete(
      `${base_url}user/deleteFromCart/${cartItemId}`,
      config,
      cartItemId
    );
    return response.data;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

const updateProductFromCart = async (cartDetail) => {
  try {
    const response = await axios.put(
      `${base_url}user/updateFromCart/${cartDetail.cartItemId}`,
      { newQuantity: cartDetail.newQuantity },
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};


const createOrden = async (orderDetail) => {
  try {
    const response = await axios.post(
      `${base_url}order/create-order`, orderDetail,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  createOrden,
};
