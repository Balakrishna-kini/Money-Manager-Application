import axios from "axios";
import { BASE_URL } from "./apiEndpoints.js";

const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Endpoints that should NOT have Authorization header
const excludeEndpoints = [
  "/api/v1.0/auth/login",
  "/api/v1.0/auth/register",
  "/status",
  "/health",
];

// Request interceptor
axiosConfig.interceptors.request.use(
  (config) => {
    const shouldSkipToken = excludeEndpoints.some((endpoint) =>
      config.url?.includes(endpoint)
    );

    if (!shouldSkipToken) {
      const accessToken = localStorage.getItem("token");
      if (accessToken && accessToken !== "null" && accessToken !== "undefined") {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.warn("Unauthorized → redirecting to login");
        window.location.href = "/login";
      } else if (error.response.status === 403) {
        console.error("Forbidden: You don’t have permission.");
      } else if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
