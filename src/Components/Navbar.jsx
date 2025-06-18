import React from "react";
import mainicon from "../Icons/mainicon.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={mainicon} alt="mainicon" className="navbar-icon" />
        <span className="brand-name">Job Portal</span>
      </div>
      <ul className="navbar-menu">
        <li className="active">Home</li>
        <li>Jobs</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}
