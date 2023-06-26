export const base_url = "https://ginger-final-project.onrender.com/api/v1/";

const getTokenFromLocalStorage = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("customer"))
: null;

export const config = {
    header: {
        Authorization: `Bearer ${
            getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.sessionToken : ""
        }`,

        Accept: "application/json",
    },
};