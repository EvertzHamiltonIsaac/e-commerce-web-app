import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getBlogs = async () => {
  try {
    const response = await axios.get(`${base_url}blog`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    throw error;
  }
};

export const blogService = {
  getBlogs,
};
