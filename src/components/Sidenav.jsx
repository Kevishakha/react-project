import React from "react";
import gimg from "../assets/gmail.png";

function Sidenav() {
  return (
    <div id="mySidenav" className="sidenav w-10">
      <a id="about" className="text-xl text-white">
        Enquiry
      </a>
      <a
        href="mailto:jingleholidaybazar@gmail.com"
        id="blog"
        className="text-3xl text-red-600"
      >
        <img src={gimg} className="bg-white h-8 w-15" alt="Gmail" />
      </a>
      <a
        href="tel:+918506922777"
        id="projects"
        className="text-xl text-blue-600"
      >
        telephone
      </a>
      <a
        href="https://wa.link/9hwu05"
        id="contact"
        className="text-xl text-green-600"
      >
        {" "}
        Whatsapp
      </a>
    </div>
  );
}

export default Sidenav;
