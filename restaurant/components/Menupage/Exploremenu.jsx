import React, { useState,useEffect } from "react";
import { Foodcategories } from "../../assets/assests";
import './Menu.css'
import Exploremenucaraousel from "./Exploremenucaraousel";

function Exploremenu({ selectedCategory, setSelectedCategory }) 
{

  const [currentIndex, setCurrentIndex] = useState(0);
 const [imagesToShow,setimagesToShow]=useState(7)
 
  const slideStep = 3;
  useEffect(() => {
    const updateImageShow = () => {
      if (window.innerWidth < 430) {
        setimagesToShow(1);
      } else if (window.innerWidth < 600) {
        setimagesToShow(2);
      }  else if (window.innerWidth < 800) {
        setimagesToShow(3);
      } else if (window.innerWidth < 1000) {
        setimagesToShow(4);
      } else if (window.innerWidth < 1200) {
        setimagesToShow(5);
      } else if (window.innerWidth < 1400) {
        setimagesToShow(6);
      } else {
        setimagesToShow(7);
      }
    };
    updateImageShow();
    window.addEventListener("resize", updateImageShow);
    return () => {
    window.removeEventListener("resize", updateImageShow); 
    };
  }, []);

  const handleNavigation = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - slideStep, 0));
    } 
    else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        Math.min(
          prevIndex + slideStep,
          Math.max(0, Foodcategories.length - imagesToShow)
        )
      );
    }
  };

  const visibleImages = Foodcategories.slice(
    currentIndex,
    currentIndex + imagesToShow
  );

  return (
    <>
    
    <div className="food-slider w-screen   h-[35vh] bg-slate-50 ">
      <div className="food-slider-Main max-w-[95vw] m-auto flex flex-row justify-center items-center relative  ">
        <button
          className="nav-button absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={() => handleNavigation("left")}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>

        <Exploremenucaraousel selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
    

        <button
          className="nav-button absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={() => handleNavigation("right")}
          disabled={currentIndex + imagesToShow >= Foodcategories.length}
        >
          &gt;
        </button>
        <div className="dots-container  absolute bottom-4 flex  gap-2">
          <span className="dot bg-gray-800"></span>
          <span className="dot bg-gray-400"></span>
          <span className="dot bg-gray-400"></span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Exploremenu;
