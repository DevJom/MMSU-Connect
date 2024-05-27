import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NoPage from "./pages/noPage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Anouncement from "./pages/anouncement";
import Profile from "./pages/profile";
import About from "./pages/about";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route index element={<Home />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/anouncement" element={<Anouncement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
