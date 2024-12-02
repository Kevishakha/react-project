import React from "react";
import { gallery } from '../../assets/assests';
import { useState,useEffect } from "react";
import './About.css'

const Gallerycarousel = () => {
    
  
  const [imagesToShow, setimagesToShow] = useState(5);
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
  return (
    <div className="gallerycarousel-container">
      <div className="gallerycarousel-track">
        {galleryImages.map((image, index) => (
          <div className="gallerycarousel-item" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
        {galleryImages.map((image, index) => (
          <div className="gallerycarousel-item" key={`duplicate-${index}`}>
            <img src={image} alt={`Gallery Duplicate ${index + 1}`} />
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Gallerycarousel;