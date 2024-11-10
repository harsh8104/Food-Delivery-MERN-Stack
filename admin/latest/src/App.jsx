import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "../src/pages/Add/Add";
import Orders from "../src/pages/Orders/Orders";
import List from "../src/pages/List/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminChat from "./Components/AdminChat/AdminChat";
function App() {
  const url = "https://full-stack-1f9p.onrender.com";
  return (
    <div>
      <ToastContainer />
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
    </div>
  );
}

export default App;
