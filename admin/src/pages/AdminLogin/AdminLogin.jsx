import { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { assets } from "../../assets/assets";

const AdminLogin = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://full-stack-1f9p.onrender.com/api/admin/login",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        setIsLoggedIn(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={onLogin} className="admin-login-container">
        <div className="admin-login-title">
          <img src={assets.logo} alt="Quick Byte logo" className="logo" />
          <h2>Admin Login</h2>
        </div>
        <div className="admin-login-inputs">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

AdminLogin.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default AdminLogin;
