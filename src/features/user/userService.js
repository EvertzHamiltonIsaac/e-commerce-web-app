import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const register = async (userData) => {
  try {
    const response = await axios.post(`${base_url}auth/register`, userData);
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

export const authService = {
  register,
  login
};