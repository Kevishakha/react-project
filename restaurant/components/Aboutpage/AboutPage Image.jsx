import React from "react";
import image from "../../assets/Image/aboutbackground.webp";
import "./About.css";

function AboutPageImage() {
  return (
    <div className="about-image w-full md:h-[75vh] xs:h-[50vh]  m-auto">
      <div
        className="image-container h-full  overflow-hidden relative  pageimg "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-12 xl:w-[50vw]  lg:w-[65vw] sm:w-[75vw] xs:w-[80vw]  xl:left-[25vw] lg:left-[17.5vw]  sm:left-[12.5vw]  xs:left-[10vw]   flex justify-center ">
          <div className=" bounce bg-black bg-opacity-70  xl:p-6 md:p-4 sm:p-3 xs:p-1  rounded-lg shadow-lg text-center text-white ">
            <h2 className="md:text-2xl font-extrabold mb-4 xs:text-xl sm:text-2xl lg:text-3xl ">
              Welcome to Our Restaurant
            </h2>
            <p className="md:text-xl text-center xs:text-xs sm:text-[16px] text-shadow-glow  ">
              Our family-owned restaurant brings together the finest ingredients
              and authentic recipes to create a dining experience that feels
              like home.Here culinary excellence meets comfort and tradition.
              Whether you’re here for a casual meal with friends or celebrating
              a special occasion, we strive to make every visit memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageImage;
