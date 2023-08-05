import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const addToCart = async (cartData) => {
  try {
    const response = await axios.post(
      `${base_url}user/create-cart`,
      cartData,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCart = async () => {
  try {
    const response = await axios.get(`${base_url}user/cart`, config);
    return response.data;
  } catch (error) {
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
    throw error;  
  }
};

export const cartService = {
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
};