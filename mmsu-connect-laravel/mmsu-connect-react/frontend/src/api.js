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
    }
)