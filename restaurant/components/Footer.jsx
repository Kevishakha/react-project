import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from "../assets/Image/tomato.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-container text-white w-screen">
        <div className="footer-waves">
          <div className="footer-top"></div>
          <svg
            className="waves w-full h-20"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
                style={{ animation: "wave 10s infinite linear" }}
              ></use>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
                style={{ animation: "wave 12s infinite linear" }}
              ></use>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
                style={{ animation: "wave 14s infinite linear" }}
              ></use>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="7"
                fill="#fff"
                style={{ animation: "wave 16s infinite linear" }}
              ></use>
            </g>
          </svg>
        </div>
        <div className=" footerheading  ">
          <p className=" italic text-3xl text-[orangered] text-center ">
            "Welcome to <strong>Tomato</strong>, where culinary excellence meets
            comfort and tradition. "
          </p>
        </div>

        <div className="w-[80vw] m-auto  ">
          <div className="links-section mb-8">
            <div className="link-column ">
              <h3 className="text-lg font-semibold mb-2">Explore</h3>
              <ul>
                <li>
                  <a href="/about" className="hover:underline border-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/menu" className="hover:underline">
                    Our Menu
                  </a>
                </li>
                <li>
                  <a href="/locations" className="hover:underline">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="link-column mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
              <ul>
                <li>
                  <a href="/faqs">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/support" >
                    Support
                  </a>
                </li>
                <li>
                  <a href="/gift-cards">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="/feedback">
                    Leave Feedback
                  </a>
                </li>
              </ul>
            </div>

            <div className="link-column mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul>
                <li>
                  <a href="/terms">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="/accessibility">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            <div className="link-column mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <ul>
                <li>
                  <a href="/blog" >
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/events" >
                    Events
                  </a>
                </li>
                <li>
                  <a href="/newsletter" >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="/careers" >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footerBottom ">
          <div className="footerBottomDiv">
            <div className="logo">
              <NavLink to="/" >
                <img src={logo} />
              </NavLink>
            </div>

            <div className=" xs:p-5 md:p-0 slogan ">
              <h2 className="text-3xl font-bold text-black hover:underline hover:text-[red] ">
                "Serving Joy, One Bite at a Time!"
              </h2>
            </div>

            <div className="social-links flex gap-4  ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel=""
              >
                <i className="fab fa-facebook-f hover:text-gray-400">
                  <FaFacebook />
                </i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel=""
              >
                <i className="fab fa-twitter  hover:text-gray-400">
                  <FaTwitter />
                </i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel=""
              >
                <i className="fab fa-instagram  hover:text-gray-400">
                  <FaSquareInstagram />
                </i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel=""
              >
                <i className="fab fa-linkedin-in  hover:text-gray-400">
                  <BsLinkedin />
                </i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#343434] ">
        <p className="p-2">
          &copy; 2024 [Restaurant Name] | All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
