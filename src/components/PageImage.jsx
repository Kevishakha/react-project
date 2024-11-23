import React from "react";
import { FaPagelines } from "react-icons/fa";

import { Link } from "react-router-dom";

function pageImage({ Page, pagePath, images, PageHead }) {
  return (
    <>
      <div className="container bg-black text-white min-h-[50vh] h-screen max-w-[100vw] flex flex-col justify-center items-center pageImage ">
        <div
          style={{
            backgroundImage: `url(${images})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
          className="  "
        >
          <div className="container absolute top-1/3 left-32 w-full page-Animate ">
            <h1 className="text-4xl font-bold mb-4">{PageHead}</h1>
            <ol className="flex flex-row gap-2">
              <li className="border-b-8 border-b-green-500 rounded-md">
                {" "}
                <Link to="/">Home </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={pagePath}>/ {Page}</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default pageImage;
