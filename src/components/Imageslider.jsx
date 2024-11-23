import React, { useState } from "react";
import { Link } from "react-router-dom";

function Imageslider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToDot = (Index) => {
    setCurrentIndex(Index);
  };
  const sliderStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
  };

  const slideStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url("${slides[currentIndex].url}")`,
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    zIndex: 5,
    cursor: "pointer",
    fontWeight: "1000",
    fontSize: "45px",
    color: "#fff",
  };

  const leftArrowStyle = {
    ...arrowStyle,
    left: "7vw",
  };
  const rightArrowStyle = {
    ...arrowStyle,
    right: "7vw",
  };

  const dotContainerStyle = {
    position: "absolute",
    bottom: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 10,
  };

  const dotStyle = (isActive) => ({
    height: "15px",
    width: "15px",
    margin: "0 5px",
    borderRadius: "50%",
    backgroundColor: isActive ? "#000" : "#fff",
    cursor: "pointer",
  });
  const welcomecontainer = {
    position: "absolute",
    top: "50%",
    margin: "0, auto",
    left: "50%",
    transform: "translate(-50%, -10%)",
    height: "25vh",
    width: "55vw",
  };

  return (
    <div style={sliderStyle}>
      <button style={leftArrowStyle} onClick={goToPrev}>
        &#60;
      </button>
      <button style={rightArrowStyle} onClick={goToNext}>
        {" "}
        &#62;
      </button>

      <div style={slideStyle}></div>

      <div
        style={welcomecontainer}
        className="flex flex-col justify-center items-center gap-y-6 slide-Animate "
      >
        <h1 className="text-white text-4xl text-center font-extrabold  ">
          Welcome To Jingle Holiday Bazaar Pvt. Ltd.
        </h1>
        <div className="cityContainer text-white text-2xl font-extrabold">
          {slides[currentIndex].city}
        </div>
        <Link to="https://wa.link/m7ra3f">
          <button
            className="bg-black text-white  rounded-full  py-2 px-8  Contactbtn hover:bg-white hover:text-black border-2 border-black text-center
       "
          >
            Contact
          </button>{" "}
        </Link>
      </div>

      <div style={dotContainerStyle}>
        <div
          style={dotStyle(currentIndex === 0)}
          onClick={() => goToDot(0)}
        ></div>
        <div
          style={dotStyle(currentIndex === 1)}
          onClick={() => goToDot(1)}
        ></div>
        <div
          style={dotStyle(currentIndex === 2)}
          onClick={() => goToDot(2)}
        ></div>
      </div>
    </div>
  );
}

export default Imageslider;
