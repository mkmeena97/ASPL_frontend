
import axios from "axios";
import keycloak from "../auth/keycloak";

const api = axios.create({
  baseURL: import.meta.env.VITE_GATEWAY_URL,
});

// Request interceptor to add token
api.interceptors.request.use(
  async (config) => {
    if (keycloak?.token) {
      config.headers.Authorization = `Bearer ${keycloak.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
