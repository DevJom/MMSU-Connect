// Interceptor checks if we have access token
import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api = axios.create({
    // Import .env ural
    baseURL : import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    // Checks if we got an access token and adds as auth header
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)
// Sets the default interceptor to this api instead of axios by default to add the auth token
export default api