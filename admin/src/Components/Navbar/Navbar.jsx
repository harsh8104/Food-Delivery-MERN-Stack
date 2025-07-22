import "./Navbar.css";
import { assets } from "../../assets/assets";
import { ImUser } from "react-icons/im";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <div className="navbar-right">
        <ImUser size={35} />
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
