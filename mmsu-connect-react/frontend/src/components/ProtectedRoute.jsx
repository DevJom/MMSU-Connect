// Represent a wrapper for protected route
// If we wrap something in protected route we need to have an auth token to acces this route
import {Navigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import {useState, useEffect} from "react";

function ProtectedRoute({children}){
    // Check if are authorized before we access this route
    // Redirect them to login

    const [isAuthorized, setIsAuthorized] = useState(null);

    // As soon as we load the protected route we activate auth function
    // If tokens are missing we go back to login
    
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, []);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try{
            const res = await api.post("/api/token/refresh/", {
                refresh : refreshToken,
            });
            if(res.status === 200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            }else{
                setIsAuthorized(false)
            }
        }catch(error){
            console.log(error);
            setIsAuthorized(false);
        }
    };
    // Look at our access token checks if it is expired or not
    // If it is expired automatically refresh the auth token
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(!token){
            setIsAuthorized(false)
            return
        }
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000

        if(tokenExpiration < now){
            await refreshToken()
        }else{
            setIsAuthorized(true)
        }
    };

    if(isAuthorized == null){
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to="/login/"></Navigate>

}

export default ProtectedRoute