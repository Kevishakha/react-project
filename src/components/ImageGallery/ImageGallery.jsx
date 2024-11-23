import React, { useState } from "react";
import CommonGallery from "./CommonGallery";
import img20 from "./EastIndiaimg/Kaziranga.webp";
import img21 from "./EastIndiaimg/Cherrapunji.webp";
import img22 from "./EastIndiaimg/Gangtok.webp";
import img23 from "./EastIndiaimg/Goechala.webp";
import img24 from "./EastIndiaimg/Pelling.webp";
import img25 from "./EastIndiaimg/Gorichen-Peak.webp";
import img26 from "./EastIndiaimg/Tsomgo-Lake.webp";
import img27 from "./EastIndiaimg/Ziro-Valley.webp";
import img28 from "./WestIndiaimg/dandeli-wildlife.webp";
import img29 from "./WestIndiaimg/Goa-beaches.webp";
import img30 from "./WestIndiaimg/Karla-Caves.webp";
import img31 from "./WestIndiaimg/lonavala.webp";
import img32 from "./WestIndiaimg/mahabaleshwar.webp";
import img33 from "./WestIndiaimg/mumbai.webp";
import img34 from "./WestIndiaimg/panchghani.webp";
import img35 from "./WestIndiaimg/SHIRDI.webp";
import img36 from "./NorthIndiaimg/Amritsar.webp";
import img37 from "./NorthIndiaimg/Jim-Corbett.webp";
import img38 from "./NorthIndiaimg/Khajjiar.webp";
import img39 from "./NorthIndiaimg/Manali1-1.webp";
import img40 from "./NorthIndiaimg/Mussoorie1.webp";
import img41 from "./NorthIndiaimg/Red-Fort.webp";
import img42 from "./NorthIndiaimg/Shimla1.webp";
import img43 from "./NorthIndiaimg/Taj-mahal.webp";
import img44 from "./SouthIndiaImg/Bangalore-Karnataka-1.webp";
import img45 from "./SouthIndiaImg/Chennai-1.webp";
import img46 from "./SouthIndiaImg/Coorg-1.webp";
import img47 from "./SouthIndiaImg/Gokarna-1.webp";
import img48 from "./SouthIndiaImg/Hampi-1.webp";
import img49 from "./SouthIndiaImg/Kanyakumari-1.webp";
import img50 from "./SouthIndiaImg/Munnar-Kerala-1.webp";
import img51 from "./SouthIndiaImg/Pondicherry-1.webp";
export const SouthIndia = [
  { url: img44, title: "Banglore" },
  { url: img45, title: "Chennai" },
  { url: img46, title: "Coorg" },
  { url: img47, title: "Gokarna" },
  { url: img48, title: "Hampi" },
  { url: img49, title: "Kanyakumari" },
  { url: img50, title: "Munnar" },
  { url: img51, title: "Pondicherry" },
];
export const NorthIndia = [
  { url: img36, title: "Amritsar" },
  { url: img37, title: "Jim-Corbett" },
  { url: img38, title: "Khajjiar" },
  { url: img39, title: "Manali1" },
  { url: img40, title: "Mussoorie1" },
  { url: img41, title: "Red-Fort" },
  { url: img42, title: "Shimla1" },
  { url: img43, title: "Taj-mahal" },
];

export const EastIndia = [
  { url: img20, title: "Kaziranga Park" },
  { url: img21, title: "Cherrapunji" },
  { url: img22, title: "Gangtok" },
  { url: img23, title: "Goechala" },
  { url: img24, title: "Pelling" },
  { url: img25, title: "Gorichen Peak" },
  { url: img26, title: "Tsomgo Lake" },
  { url: img27, title: "Ziro Valley" },
];

export const WestIndia = [
  { url: img28, title: "Dandeli Wildlife" },
  { url: img29, title: "Goa Beaches" },
  { url: img30, title: "Karla Caves" },
  { url: img31, title: "Lonavala" },
  { url: img32, title: "Mahabaleshwar" },
  { url: img33, title: "Mumbai" },
  { url: img34, title: "Panchgani" },
  { url: img35, title: "Shirdi" },
];

function ImageGallery() {
  const [imgArray, setImgArray] = useState(EastIndia);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (region, index) => {
    setImgArray(region);
    setActiveButton(index);
  };
  return (
    <>
      <div className="pt-4 border-black regionBtn">
        <button
          onClick={() => handleButtonClick(EastIndia, 0)}
          style={{
            color: activeButton === 0 ? "black" : "blue",
            border:
              activeButton === 0 ? "2px solid rgb(244, 240, 240)" : "none",
            borderBottom:
              activeButton === 0 ? "none" : "2px solid rgb(244, 240, 240)",
          }}
          className=" text-white px-4 py-2 mr-2"
        >
          East India
        </button>
        <button
          onClick={() => handleButtonClick(WestIndia, 1)}
          style={{
            color: activeButton === 1 ? "black" : "blue",
            border:
              activeButton === 1 ? "2px solid rgb(244, 240, 240)" : "none",
            borderBottom:
              activeButton === 1 ? "none" : "2px solid rgb(244, 240, 240)",
          }}
          className=" text-white px-4 py-2 mr-2"
        >
          West India
        </button>

        <button
          onClick={() => handleButtonClick(NorthIndia, 2)}
          style={{
            color: activeButton === 2 ? "black" : "blue",
            border:
              activeButton === 2 ? "2px solid rgb(244, 240, 240)" : "none",
            borderBottom:
              activeButton === 2 ? "none" : "2px solid rgb(244, 240, 240)",
          }}
          className=" text-white px-4 py-2 mr-2"
        >
          North India
        </button>

        <button
          onClick={() => handleButtonClick(SouthIndia, 3)}
          style={{
            color: activeButton === 3 ? "black" : "blue",
            border:
              activeButton === 3 ? "2px solid rgb(244, 240, 240)" : "none",
            borderBottom:
              activeButton === 3 ? "none" : "2px solid rgb(244, 240, 240)",
          }}
          className=" text-white px-4 py-2"
        >
          South India
        </button>
      </div>

      <CommonGallery imgArr={imgArray} />
      {/* <div className="flex flex-row mt-4">
        </div> */}
    </>
  );
}

export default ImageGallery;
