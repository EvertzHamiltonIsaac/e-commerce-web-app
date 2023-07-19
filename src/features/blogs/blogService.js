import axios from "axios";
import { base_url} from "../../utils/axiosConfig";

const getBlogs = async () => {
  try {
    const response = await axios.get(`${base_url}blog`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    throw error;
  }
};
const getBlog = async (id) => {
  try {
    const response = await axios.get(`${base_url}blog/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    throw error;
  }
};

export const blogService = {
  getBlogs,
  getBlog,
};
