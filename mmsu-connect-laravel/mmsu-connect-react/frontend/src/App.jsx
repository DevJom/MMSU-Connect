import react from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
};

export default App;
