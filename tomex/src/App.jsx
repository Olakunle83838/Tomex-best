import ChatBot from "./Components/ChatBot";
import Home from "./pages/Home/Home";
import "./index.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
function App() {
  return (
    <>
      <ChatBot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
