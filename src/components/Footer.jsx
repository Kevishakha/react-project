import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className=" max-w-[100vw] w-screen  ">
        <div className="" id="footerdiv1">
          {/*-------------------------------------------------  first div about jingle ----------------------------- */}
          <div className="footerdivs flex flex-col items-start gap-4">
            <h6>
              <a href="#">About Jingle</a>
            </h6>
            <p className="text-xs">Travel with us from here to any where...</p>

            <Link className="flex gap-3">
              <i className="">
                <FaPhoneAlt />
              </i>
              <p className="text-xs">Phone:</p>{" "}
            </Link>
            <Link to="https://wa.link/m7ra3f" className="flex px-6">
              {" "}
              <p className="text-xs ">
                +91 8506922777
                <br />
                +91 8506944777
              </p>
            </Link>
            <Link className="flex gap-3 ">
              <i className="">
                <IoMailOutline />
              </i>{" "}
              <p className="text-xs">jingleholidaybazar@gmail.com</p>
            </Link>
            <Link className="flex gap-3">
              <i className="">
                <IoMailOutline />
              </i>{" "}
              <p className="text-xs">thejingleholidaybazar@gmail.com</p>
            </Link>
            <Link to="https://wa.link/m7ra3f" className="flex gap-3">
              <i className="">
                <FaPhoneAlt />
              </i>
              <p className="text-xs">24/7 Dedicated Customer Support</p>
            </Link>
          </div>

          {/*-------------------------------------------------  2nd div about jingle link */}
          <div className="footerdivs footerdivs1">
            <ul>
              <li>
                <h4>Quick Links</h4>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog list</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Hotels</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>
          {/*-------------------------------------------------  3rd div about jingle  */}
          <div className="footerdivs">
            <ul>
              <li>
                <h4>Domestic Packages</h4>
              </li>
              <li>
                <a href="#">Uttarakhand</a>
              </li>
              <li>
                <a href="#">Mumbai</a>
              </li>
              <li>
                <a href="#">Ladakh</a>
              </li>
              <li>
                <a href="#">Meghalaya</a>
              </li>
              <li>
                <a href="#">North East India</a>
              </li>
              <li>
                <a href="#">Rajasthan</a>
              </li>
            </ul>
          </div>
          {/*-------------------------------------------------  4th div about jingle  */}
          <div className="footerdivs">
            <ul>
              <li>
                <h4>International Packages</h4>
              </li>
              <li>
                <a href="#">Maldives</a>
              </li>
              <li>
                <a href="#">Singapore</a>
              </li>
              <li>
                <a href="#">Switzerland</a>
              </li>
              <li>
                <a href="#">Saudi Arabia</a>
              </li>
              <li>
                <a href="#">Thailand</a>
              </li>
              <li>
                <a href="#">Dubai</a>
              </li>
            </ul>
          </div>

          {/*-------------------------------------------------  5th div about jingle  */}
          <div className="footerdivs">
            <ul>
              <li>
                <h4>Yatra</h4>
              </li>
              <li>
                <a href="#">Mata Vaishno</a>
              </li>
              <li>
                <a href="#">Kedarnath</a>
              </li>
              <li>
                <a href="#">Badrinath</a>
              </li>
              <li>
                <a href="#">Char Dham Yatra</a>
              </li>
              <li>
                <a href="#">Ramayana Yatra</a>
              </li>
              <li>
                <a href="#">9 Devi Yatra</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="w-3/4 border-t-2 border-slate-100 flex flex-row justify-between m-auto pt-4 pb-4 "
          id="footerdiv2"
        >
          <div className="text-xs" id="footerdivlast">
            Powered By |{" "}
            <a href="https://namratauniversal.com/" target="_blank">
              Namrata Universal
            </a>{" "}
            | All Rights are Reserved by Jingleholidaybazar
          </div>
          <div className="flex gap-4 ">
            <i className="text-xs">
              <FaFacebookF />
            </i>
            <i className="text-xs">
              <FaTwitter />
            </i>
            <i className="text-xs">
              <FaInstagram />
            </i>
            <i className="text-xs">
              <FaLinkedinIn />
            </i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
