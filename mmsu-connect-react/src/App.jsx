import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NoPage from "./pages/noPage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Anouncement from "./pages/anouncement";
import Profile from "./pages/profile";
import About from "./pages/about";
import Post from "./pages/post";

const App = () => {
  return (
<<<<<<< HEAD
    <>
      <div className="scrollbar-hide">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/anouncement" element={<Anouncement />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </>
=======
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route index element={<Home />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/anouncement" element={<Anouncement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/post" element={<Post />} />
      <Route path="/developers" element={<Developers />} />
    </Routes>
>>>>>>> bfdd451f476c34cbbb8f977085df97de2167c20f
  );
};

export default App;
