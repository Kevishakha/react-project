import React, { useEffect, useState } from "react";
import { Foodcategories } from "../../assets/assests";
import "./Menu.css";

function Exploremenucaraousel({selectedCategory, setSelectedCategory}) {
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        const track = document.querySelector(".carousel-track");
        if (track) {
          track.scrollLeft += 1; 
          if (track.scrollLeft >= track.scrollWidth / 2) {
            track.scrollLeft = 0; 
          }
        }
      }, 10); 
    }
    return () => clearInterval(interval); 
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="food-slider w-screen mt-[2rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="food-slider-Main max-w-[85vw] m-auto flex flex-row items-center relative overflow-hidden  ">
        
        <div className="carousel-track flex">
          {Foodcategories.concat(Foodcategories).map((item, index) => (
            <div key={index}
              id="fooditem" onClick={() =>
                setSelectedCategory((prev) =>prev === item.title ? "All" : item.title)}
              className={ ` ${selectedCategory === item.title ? 'active':""} carousel-item flex-shrink-0 w-[16vw] h-[16vw] relative rounded-full flex items-center justify-center bg-slate-100 shadow-lg `}
            >
              <img src={item.images} alt={item.title}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bg-black bg-opacity-50 flex items-center justify-center rounded-full text-white text-sm font-semibold">
                {item.title}
              </div>
            </div>
          ))}
           {Foodcategories.concat(Foodcategories).map((item, index) => (
            <div key={`duplicate-${index}`}
              id="fooditem" onClick={() =>
                setSelectedCategory((prev) =>prev === item.title ? "All" : item.title)}
              className="carousel-item flex-shrink-0 w-[16vw] h-[16vw] relative rounded-full flex items-center justify-center bg-gray-200 shadow-lg"
            >
              <img src={item.images} alt={item.title}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bg-black bg-opacity-50 flex items-center justify-center rounded-full text-white text-sm font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>

       
        
      </div>
    </div>
  );
}

export default Exploremenucaraousel;