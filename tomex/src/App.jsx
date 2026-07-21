import ChatBot from "./Components/ChatBot";
import Home from "./pages/Home/Home";
import "./index.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/About/AboutUs";
// import Registration from "./pages/Registration/Registration";
import Success from "./pages/success/Success";
import RoleSelection from "./pages/Role/RoleSelection";
import FarmerRegistration from "./pages/Registration/FarmerRegistration";
function App() {
  return (
    <>
      <ChatBot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/farmer-registration" element={<FarmerRegistration />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
