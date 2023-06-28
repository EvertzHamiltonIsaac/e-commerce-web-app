import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async () => {
  try {
    const response = await axios.get(`${base_url}product`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving products:", error);
    throw error;
  }
};

const addToWishlist = async (prodId) => {
  try {
    const response = await axios.put(`${base_url}wishlist`, { prodId });
    return response.data;
  } catch (error) {
    console.error("Error retrieving wishlist:", error);
    throw error;
  }
};

export const productService = {
  getProducts,
  addToWishlist
};