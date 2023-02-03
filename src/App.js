import "./App.css";
import Home from "./components/Home";
import SignupForm from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import LandingPageVideo from "./components/LandingPageVideo";
import Resources from "./pages/Resources";
import Opportunities from "./pages/Opportunities";
import Practice from "./pages/Practice";
import Courses from "./pages/Courses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageVideo />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/resources" element={<Resources />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route
          path="/profile/opportunities"
          element={<Opportunities />}
        ></Route>
        <Route path="/profile/courses" element={<Courses />}></Route>
        <Route path="/profile/practice" element={<Practice />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
