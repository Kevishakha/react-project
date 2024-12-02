import React from "react";
import image from "../../assets/Image/menubg.webp";

function MenupageImage() {
  return (
    <>
      <div
        className="relative md:h-[75vh] xs:h-[50vh] max-w-[100vw] m-auto flex items-center justify-center menupageImg pageimg "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        ></div>

        <div className="bounce pghead absolute bottom-28 xs:bottom-12  md:w-[50vw] xs:w-[80vw]  flex flex-col gap-2 items-center text-center text-white">
          <h1 className="text-white md:text-5xl font-extrabold xs:text-3xl  ">
            Explore Our Menu
          </h1>
          <p className="md:text-3xl text-white italic font-bold xs:text-1.5xl  ">
            Discover the best food & drinks
          </p>

          <p className="md:text-xl max-w-[80%] text-white  xs:text-xs ">
            Enjoy a variety of dishes crafted to perfection with the freshest
            ingredients. Scroll down to explore our full menu.
          </p>
        </div>
      </div>
    </>
  );
}

export default MenupageImage;
