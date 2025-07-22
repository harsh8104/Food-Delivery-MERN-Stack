import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "../src/pages/Add/Add";
import Orders from "../src/pages/Orders/Orders";
import List from "../src/pages/List/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminChat from "./Components/AdminChat/AdminChat";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import axios from "axios";

function App() {
  const url = "https://full-stack-1f9p.onrender.com";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const verifyToken = async (token) => {
    try {
      const response = await axios.post(
        `${url}/api/admin/verify`,
        {},
        {
          headers: { token },
        }
      );
      if (response.data.success) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      verifyToken(token);
    }
  }, []);

  return (
    <div>
      <ToastContainer />
      {!isLoggedIn ? (
        <AdminLogin setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Navbar />
          <hr />
          <div className="app-content">
            <Sidebar />
            <Routes>
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/chat" element={<AdminChat />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
