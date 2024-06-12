import { apiKey, apiUrl } from "@/constants/Api";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: apiUrl, // Base URL for the Tenor API
  headers: {
    Authorization: `Bearer ${apiKey}`, // Set the Authorization header with the API key
  },
});

export default axiosInstance;
