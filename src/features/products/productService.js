import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async () => {
  try {
    const response = await axios.get(`${base_url}product`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving products:", error);
    throw error;
  }
};

const getSingleProduct = async (id) => {
  try {
    const response = await axios.get(`${base_url}product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving single product:", error);
    throw error;
  }
};

const addToWishlist = async (productId) => {
  try {
    const response = await axios.put(
      `${base_url}wishlist`,
      { productId },
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error retrieving wishlist:", error);
    throw error;
  }
};

const rateProduct = async (data) => {
  try {
    const response = await axios.put(`${base_url}product/rating`, data, config);
    return response.data;
  } catch (error) {
    console.error("Error retrieving wishlist:", error);
    throw error;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
  getSingleProduct,
  rateProduct,
};
