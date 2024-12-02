import React, { useEffect, useState } from "react";
import { foodData } from "../../assets/assests";
import { Link } from "react-router-dom";

function FoodSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToShow, setimagesToShow] = useState(6);

  const slideStep = 3;

  useEffect(() => {
    const updateImageShow = () => {
      if (window.innerWidth < 500) {
        setimagesToShow(3);
      } else if (window.innerWidth < 900) {
        setimagesToShow(4);
      } else if (window.innerWidth < 1024) {
        setimagesToShow(5);
      } else {
        setimagesToShow(6);
      }
    };
    updateImageShow();
    window.addEventListener("resize", updateImageShow);
    return () => {
      window.removeEventListener("resize", updateImageShow); // Properly remove the event listener
    };
  }, []);

  const handleNavigation = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - slideStep, 0));
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + slideStep, foodData.length - imagesToShow)
      );
    }
  };

  const visibleImages = foodData.slice(
    currentIndex,
    currentIndex + imagesToShow
  );

  return (
    <div className="food-slider w-screen md:mt-[5vh]  xs:mt-[1vh]  md:h-[25vh] xs:h-[15vh]  ">
      <div className="food-slider-HomeMain max-w-[90vw] xs:w-[100vw] m-auto flex flex-row items-center relative">
        <button
          className="nav-button absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={() => handleNavigation("left")}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>

        <div className="flex flex-row overflow-hidden w-full justify-center md:gap-14 xs:gap-6 mx-4">
          {visibleImages.map((item) => (
            <div
              key={item.id}
              className="food-item  md:w-[20vh] h-[full]  flex items-center justify-center"
            >
              <Link to="/menu">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover  "
                />
              </Link>
            </div>
          ))}
        </div>

        <button
          className="nav-button absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={() => handleNavigation("right")}
          disabled={currentIndex + imagesToShow >= foodData.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default FoodSlide;
