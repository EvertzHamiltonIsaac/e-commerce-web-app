import axios from "axios";
import { base_url} from "../../utils/axiosConfig";

const postQuery = async (contactData) => {
  try {
    const response = await axios.post(`${base_url}enquiry`, contactData);
    return response.data;
  } catch (error) {
    console.error("Error retrieving contacts:", error);
    throw error;
  }
};

export const contactService = {
  postQuery,
};
