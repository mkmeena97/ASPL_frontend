//src/api/axiosInstance.js
import axios from "axios";
import keycloak from "../auth/keycloak";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

//  Request interceptor
api.interceptors.request.use(
  async (config) => {
    if (keycloak?.token) {
      console.log("Token", keycloak.token);
      try {
        // Refresh token if expiring in next 30 seconds
        const refreshed = await keycloak.updateToken(30);
        if (refreshed) {
          console.log(" Token refreshed");
        }

        config.headers.Authorization = `Bearer ${keycloak.token}`;
      } catch (error) {
        console.error(" Token refresh failed:", error);
        keycloak.logout(); // Auto logout if refresh fails
      }
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor for 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("401 Unauthorized – logging out...");
      keycloak.logout();
    }
    return Promise.reject(error);
  }
);

export default api;
