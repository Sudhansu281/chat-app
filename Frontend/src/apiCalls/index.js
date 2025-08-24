import axios from "axios";
export const url = "https://chat-app-04.onrender.com";
export const axiosInstance = axios.create({
     headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
});
