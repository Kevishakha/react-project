import React, { useEffect, useState } from "react";
import "./About.css";
import { gallery } from "../../assets/assests";
import Gallerycarousel from "./Gallerycaraousel";

function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToShow, setimagesToShow] = useState(5);
  const slideStep = 3;

  useEffect(() => {
    const updateImageToShow = () => {
      if (window.innerWidth < 400) {
        setimagesToShow(1);
      } else if (window.innerWidth < 600) {
        setimagesToShow(2);
      } else if (window.innerWidth < 800) {
        setimagesToShow(3);
      } else if (window.innerWidth < 1000) {
        setimagesToShow(4);
      } else {
        setimagesToShow(5);
      }
    };
    updateImageToShow();
    window.addEventListener("resize", updateImageToShow);

    return () => {
      window.removeEventListener("resize", updateImageToShow);
    };
  }, []);

  const galleryImages = [
    gallery.rooftop,
    gallery.rooftop2,
    gallery.dinetbl,
    gallery.groupChairs,
    gallery.rooftop,
    gallery.rooftop2,
    gallery.gal1,
    gallery.gal2,
    gallery.gal3,
    gallery.gal4,
    gallery.gal5,
    gallery.gal6,
    gallery.gal7,
    gallery.gal8,
  ];

  const handleNavigation = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - slideStep, 0));
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        Math.min(
          prevIndex + slideStep,
          Math.max(0, galleryImages.length - imagesToShow)
        )
      );
    }
  };



  return (
    <>
      <div className="  gallery-slider w-screen md:mt-[13vh] md:h-[50vh] xs:mt-[2vh] xs:h-[50vh] sm:h-[50vh]  flex-col justify-center items-center  ">
        <div className=" gallery-slider-Main max-w-[90vw] mx-[5vw] justify-center flex flex-row items-center relative  ">
          <button
            className="nav-button absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
            onClick={() => handleNavigation("left")}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>

          <section className="gallery-section w-[90vw] bg-slate-100  ">
            <Gallerycarousel />
           
          </section>

          <button
            className="nav-button absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
            onClick={() => handleNavigation("right")}
            disabled={currentIndex + imagesToShow >= galleryImages.length}
          >
            &gt;
          </button>
        </div>
        <div className="gallerycarousel-dots">
        <span className="gallerydot gallerydot-left"onClick={() => handleNavigation("left")}
            disabled={currentIndex === 0}
        ></span>
        <span className="gallerydot gallerydot-right" onClick={() => handleNavigation("right")}
            disabled={currentIndex + imagesToShow >= galleryImages.length}></span>
        <span className="gallerydot gallerydot-right" onClick={() => handleNavigation("right")}
            disabled={currentIndex + imagesToShow >= galleryImages.length}
        ></span>
      </div>
      </div>
    </>
  );
}

export default GallerySection;
