import { useState } from "react";
import logo from "../../Images/logo1.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={logo} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>
            <button
              className="LoginBtn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
