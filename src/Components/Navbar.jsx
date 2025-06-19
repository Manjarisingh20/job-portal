import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/Images/mainicon.png" alt="mainicon" className="navbar-icon" />
        <span className="brand-name">Job Portal</span>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="navbar-menu hidden md:flex">
        <li className="active">Home</li>
        <li>Jobs</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className="navbar-right hidden md:flex">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-95 px-6 py-4 flex flex-col gap-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-white text-base font-medium">
            <li className="active">Home</li>
            <li>Jobs</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <button className="login-btn text-left">Login</button>
            <button className="register-btn w-full">Register</button>
          </div>
        </div>
      )}
    </nav>
  );
}

