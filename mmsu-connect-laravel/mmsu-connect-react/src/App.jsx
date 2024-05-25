import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
};

export default App;
