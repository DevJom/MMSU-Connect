import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/home";
import NoPage from "./pages/noPage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Anouncement from "./pages/anouncement";

const App = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/anouncement" element={<Anouncement />} />
            </Route>
        </Routes>
    );
};

export default App;
