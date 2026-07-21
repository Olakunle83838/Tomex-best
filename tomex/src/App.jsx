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
import Services from "./pages/Sarvices/Services";
import BuyerRegistration from "./pages/Registration/BuyerRegistration";
import FarmerVerification from "./pages/Registration/FarmerVerification";
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
        <Route path="/services" element={<Services />} />
        <Route path="/buyer-registration" element={<BuyerRegistration />} />
        <Route path="/farmer-verification" element={<FarmerVerification />} />
      </Routes>
    </>
  );
}

export default App;
