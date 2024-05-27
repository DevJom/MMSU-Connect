import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/home";
import NoPage from "./pages/NotFound";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Anouncement from "./pages/anouncement";
import Profile from "./pages/profile";
import About from "./pages/about";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const Logout = () =>{
    localStorage.clear()
    return <Navigate to="/login"></Navigate>
}

const RegisterAndLogout = () =>{
    localStorage.clear()
    return <Signup />
}

const App = () => {
    return (
        // <Routes>
        //     <Route path="login" element={<Login />} />
        //             <Route path="signup" element={<Signup />} />
        //             <Route path="/" element={<Navbar />}>
        //                 <Route index element={<Home />} />
        //                 <Route path="*" element={<NoPage />} />
        //                 <Route path="/anouncement" element={<Anouncement />} />
        //                 <Route path="/profile" element={<Profile />} />
        //                 <Route path="/about" element={<About />} />
        //     </Route>
        // </Routes>
        <Routes>
            <Route
                path ="/"
                element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                }
            />
            <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element ={<RegisterAndLogout />}/>
            <Route path="/anouncement" element={<Anouncement />} />
            <Route path="*" element={<NotFound />}>
            </Route>
        </Routes>                
    )
}

export default App;
