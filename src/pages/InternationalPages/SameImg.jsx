import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/travel.webp";
import img2 from "../../assets/Jingle.webp";
import img3 from "../../assets/travel-world (1).webp";

function SameImg({ place, summaryOfPlace, imgArr }) {
  return (
    <>
      <h1 className="text-center font-semibold text-3xl text-black p-4 ">
        {place} Tour Package
      </h1>
      <div className="flex flex-row m-auto gap-5 justify-center h-auto w-3/4 mb-4">
        <div>
          <img src={img1} alt="travel" />
        </div>
        <div>
          <img src={img2} alt="jingle" />
        </div>
        <div>
          <img src={img3} alt="travel-world" />
        </div>
      </div>
      <div className="flex flex-col items-center w-3/4 h-auto m-auto p-4">
        <h1 className="text-4xl italic font-semibold text-red-500 p-4 ">
          Perfect Time to Visit {place}
        </h1>
        <p>{summaryOfPlace}</p>
      </div>
      <div>
        <h3 className="text-center font-semibold text-black text-3xl p-4 ">
          Latest Tour Packages
        </h3>
        <div className="flex gap-8 h-auto w-3/4 m-auto flex-wrap ">
          {imgArr.map((item) => {
            return (
              <div key={item.id} className="w-[350px] idiv ">
                <div className="iimg">
                  <img src={item.img} className="w-full h-auto" />
                </div>
                <div className="p-6 ">
                  <h2 className="text-xl font-semibold text-center mb-2 iidivPlace relative">
                    {item.place} Tour
                  </h2>

                  <p className="text-[14px] leading-4 mb-6">{item.about}</p>
                  <Link to="https://wa.link/m7ra3f">
                    <button className="text-blue ring-2 ring-green-500 px-3 py-0 rounded-sm">
                      Enquiry
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SameImg;
