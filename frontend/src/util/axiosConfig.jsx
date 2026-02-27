import axios from "axios";
import { BASE_URL } from "./apiEndpoints.js";

const axiosConfig = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

// Use exact paths or simpler checks
const excludeEndpoints = ["/auth/login", "/auth/register", "/status", "/health"];

axiosConfig.interceptors.request.use((config) => {
    // 1. Improved check: ensure we handle undefined urls
    const url = config.url || "";
    const shouldSkipToken = excludeEndpoints.some((endpoint) => url.includes(endpoint));

    if (!shouldSkipToken) {
        // 2. Fix: localStorage sometimes stores strings with extra quotes
        let accessToken = localStorage.getItem("token");
        
        if (accessToken) {
            // Remove extra quotes if they exist (common with JSON.stringify)
            const cleanToken = accessToken.replace(/^"(.*)"$/, '$1');
            config.headers.Authorization = `Bearer ${cleanToken}`;
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosConfig.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response) {
        // 3. Handle 403 as well as 401
        // Often, if a token is expired or wrong, Spring returns 403
        if (error.response.status === 401 || error.response.status === 403) {
            localStorage.removeItem("token"); // Clear bad token
            window.location.href = "/login";
        } else if (error.response.status === 500) {
            console.error("Server error. Please try again later");
        }
    } else if (error.code === "ECONNABORTED") {
        console.error("Request timeout. Please try again.");
    }
    return Promise.reject(error);
});

export default axiosConfig;