export const base_url = "https://ginger-final-project.onrender.com/api/v1/";

const getTokenFromLocalStorage = localStorage.getItem("sessionToken")
  ? localStorage.getItem("sessionToken")
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : ""
    }`,

    Accept: "application/json",
  },
};
