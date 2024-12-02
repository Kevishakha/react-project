import React from "react";
import logo from "../assets/Image/tomato.png";
import { FaUtensils, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Icon } from "../assets/assests";

const Navbar = ({ toggleTheme, isDarkMode, setShowLogin }) => {
  
  const [isCenterMenuOpen, setIsCenterMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  const toggleCenterMenu = () => {
    setIsCenterMenuOpen(!isCenterMenuOpen);
    setIsRightMenuOpen(!isRightMenuOpen);
  };

 

  return (
    <>
      <div className="hamburger" onClick={toggleCenterMenu}>
        <div className="p-1 w-[40px] h-[30px]">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={` ${isDarkMode ? "dark-navbar" : "light-navbar"}  ` } id="Navbar">
        <div className="left-section flip-infinite ">
          <FaUtensils className="logo-icon flip" />
          <div className="logo flex items-center">
            <NavLink to="/">
              <img src={logo} alt="Logo"  />
            </NavLink>
          </div>
        </div>


      <div className="center-section ">
          <ul className={`nav-ul center-nav ${isCenterMenuOpen ? "active" : ""}`}>
            <li>
              <NavLink to="/" className="nav-li neon-text">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="nav-li neon-text">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-li neon-text">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-li neon-text ">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservation" className="nav-li neon-text ">
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink  to='/login'
               onClick={(e) => {
                  e.preventDefault(); 
                  setShowLogin(true); 
                }}
                className=" nav-li neon-text "
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>

       
        <div className="right-section">
          <ul
            className={`nav-ul right-nav flex items-center ${isRightMenuOpen ? "active" : ""}`}
          >
            <li className="Cart">
              <NavLink to="/cart" className="  nav-li neon-text">
                {Icon.cartIcon}
              </NavLink>
            </li>
            <li className="mode-btn">
              <button
                onClick={toggleTheme}
                className="theme-toggle-button nav-li"
              >
                {isDarkMode ? "🌙" : "☀️"}
              </button>
            </li>
            <li>
              <NavLink to='/favorites' className="nav-li" >
                💖 
              </NavLink>
  
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;