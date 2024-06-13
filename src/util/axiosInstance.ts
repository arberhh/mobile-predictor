import axios from "axios";
import { apiKey, apiUrl } from "@/constants/Api";

const axiosInstance = axios.create({
  baseURL: apiUrl, // Base URL for the Tenor API
  params: {
    key: apiKey,
  },
});

export default axiosInstance;
