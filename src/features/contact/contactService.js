import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const postQuery = async (contactData) => {
  try {
    const response = await axios.get(`${base_url}enquiry`, contactData);
    return response.data;
  } catch (error) {
    console.error("Error retrieving contacts:", error);
    throw error;
  }
};

export const contactService = {
  postQuery,
};
