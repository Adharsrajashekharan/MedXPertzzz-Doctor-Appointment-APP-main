import axios from "axios";
const REACT_APP_BE_URL = "http://localhost:5000";
const axiosConfig = axios.create({
  baseURL: REACT_APP_BE_URL, // set the base URL for all requests
//   baseURL: process.env.REACT_APP_BE_URL, // set the base URL for all requests
//   timeout: 5000, // set the request timeout in milliseconds
//   headers: {
//     "Content-Type": "application/json", // set the default content type for requests
//     Authorization: "Bearer " + localStorage.getItem("accessToken"), // set the default authorization header
//   },
});

export default axiosConfig;
