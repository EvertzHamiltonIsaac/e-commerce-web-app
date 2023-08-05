import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

//! Format of Services
// const getCoupons = async () => {
//     try {
//       const res = await axios.get(`${URL}coupon/`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
//         },
//       });
//       return res.data;
//     } catch (error) {
//       throw error;
//     }
//   };

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
    localStorage.setItem("message", response.data[`message`]);
    localStorage.setItem("user", JSON.stringify(response.data[`data`]));
    localStorage.setItem("sessionToken", response.data[`sessionToken`]);
    
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

const forgotPassword = async (body) => {
  try {
    const response = await axios.post(`${base_url}user/forgotPassword`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const resetPassword = async ({token, body}) => {
  try {
    const response = await axios.put(`${base_url}user/resetPassword/${token}`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const authService = {
  register,
  login,
  forgotPassword,
  resetPassword
};
