import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "./common/Images"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  return (
    <nav className="navbar container">
      <div className="navbar-left">
        <Images src="/Images/mainicon.png" alt="mainicon" className="navbar-icon" />
        <span className="brand-name">Job Portal</span>
      </div>

      
      <div className="xl:hidden">
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      
      <ul className="navbar-menu hidden xl:flex">

        <li className="active" onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/jobs")}>Jobs</li>
        <li onClick={() => navigate("/aboutus")}>About Us</li>
        <li onClick={() => navigate("/contactus")}>Contact Us</li>

      </ul>

      <div className="navbar-right hidden xl:flex">
        <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
        <button className="register-btn" onClick={() => navigate("/register")}>Register</button>
      </div>

      
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-95 px-6 py-4 flex flex-col gap-4 xl:hidden z-50">
          <ul className="flex flex-col gap-4 text-white text-base font-medium">

            <li className="active"  onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/jobs")}>Jobs</li>
            <li onClick={() => navigate("/aboutus")}>About Us</li>
            <li onClick={() => navigate("/contactus")}>Contact Us</li>

          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <button className="login-btn text-left" onClick={() => navigate("/login")}>Login</button>
            <button className="register-btn text-left" onClick={() => navigate("/register")}>Register</button>
          </div>
        </div>
      )}
    </nav>
  );
}

