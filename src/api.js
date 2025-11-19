import axios from "axios";

// Load API URL from .env
const API_URL = import.meta.env.VITE_API_URL;

// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// REQUEST INTERCEPTOR — attaches JWT automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR — auto-logout on invalid token
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If backend auth middleware throws 401 (invalid or expired token)
    if (error.response?.status === 401) {
      console.warn("JWT expired or invalid. Logging out...");
      localStorage.removeItem("jwt");
      // Optionally redirect:
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
