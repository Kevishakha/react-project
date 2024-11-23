import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/mainlogo.gif";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const togglemenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav id="navbar" className="">
        <div className="flex items-center" id="logodiv">
          <img src={logo} alt="logo" className=" rounded-full " id="logo" />
        </div>
        <div className="hamburger" onClick={togglemenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`menu-links ${isOpen ? "active" : ""} `}>
          <li>
            <NavLink to="/" className=" nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className=" nav-link">
              About Us
            </NavLink>
          </li>
          <li className="dropdown-menu dropdown-toggle" data-toggle="dropdown">
            <NavLink className=" nav-link">Domestic</NavLink>
            <ul id="dropdown-ul" className="dropdown-ul">
              <li>
                <NavLink to="/north" className="nav-li-items">
                  NORTH
                </NavLink>
              </li>
              <li>
                <NavLink to="/east" className="nav-li-items">
                  EAST
                </NavLink>
              </li>
              <li>
                <NavLink to="/west" className="nav-li-items">
                  WEST
                </NavLink>
              </li>
              <li>
                <NavLink to="/south" className="nav-li-items">
                  SOUTH
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown-menu">
            <NavLink className="nav-link" data-toggle="dropdown">
              International
            </NavLink>

            <ul className="" class="dropdown-ul">
              <li>
                <NavLink to="/thaiLand" className="nav-li-items">
                  ThaiLand
                </NavLink>
              </li>
              <li>
                <NavLink to="/belgium" className="nav-li-items">
                  Belgium
                </NavLink>
              </li>
              <li>
                <NavLink to="/malysia" className="nav-li-items">
                  Malysia
                </NavLink>
              </li>
              <li>
                <NavLink to="/maldives" className="nav-li-items">
                  Maldives
                </NavLink>
              </li>
              <li>
                <NavLink to="/switzerland" className="nav-li-items">
                  SwittzerLand
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="dropdown-menu">
            <NavLink className="nav-link">Place</NavLink>

            <ul className="" class="dropdown-ul">
              <li>
                <NavLink to="/domestic/NORTH" className="nav-li-items">
                  NORTH
                </NavLink>
              </li>
              <li>
                <NavLink to="/domestic/EAST" className="nav-li-items">
                  EAST
                </NavLink>
              </li>
              <li>
                <NavLink to="/domestic/WEST" className="nav-li-items">
                  WEST
                </NavLink>
              </li>
              <li>
                <NavLink to="/domestic/SOUTH" className="nav-li-items">
                  SOUTH
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="dropdown-menu">
            <NavLink className="nav-link">Packages</NavLink>

            <ul className="" class="dropdown-ul">
              <li>
                <NavLink to="/domestic/india" className="nav-li-items">
                  Domestic Packages
                </NavLink>
              </li>
              <li>
                <NavLink to="/domestic/india" className="nav-li-items">
                  International Packages{" "}
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </li>
          <li>
            <a
              href="src/components/Paymentform.html"
              className="nav-link"
              target="_blank"
            >
              Pay Now
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
