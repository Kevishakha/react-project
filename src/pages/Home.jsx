import React from "react";
import Services from "../components/Services";
import Imageslider from "../components/Imageslider";
import ServiceCard from "../components/ServiceCard";
import ThreeImage from "../components/ThreeImage";
import Place2 from "../components/Place2";
import img1 from "./images/himalay.webp";
import img2 from "./images/badrinath-banner.webp";
import img3 from "./images/darjeeling-banner.webp";
import img4 from "./images/goechala-banner.webp";
import img5 from "./images/jaipur.webp";
import img6 from "./images/pondicherry-banner.webp";
import img7 from "./images/rameshwarm-banner.webp";
import img8 from "./images/registan.webp";

import img9 from "../assets/qutub.jpg";
import img10 from "../assets/Gangtok.webp";
import img11 from "../assets/Taj-mahal.webp";
import img13 from "../assets/DUBAI1.webp";
import img14 from "../assets/sydney.webp";
import img15 from "../assets/singapore.webp";

import Plac from "../components/Plac";
import ImageGallery from "../components/ImageGallery/ImageGallery";

const slides = [
  { url: img1, city: "Himalaya, The Mountain range of India" },
  { url: img2, city: "Badrinath" },
  { url: img3, city: "Darjelling, Sikkim" },
  { url: img4, city: "Goechala, West Bangal" },
  { url: img5, city: "Jaipur, Rajasthan" },
  { url: img6, city: "Pondicherry, Puduchery" },
  { url: img7, city: "Rameshwaram" },
  { url: img8, city: "Rajasthan" },
];
const zoomimg1 = [
  { url: img9, title: "Qutub Minar, Delhi" },
  { url: img10, title: "Gangtok, Sikkim" },
  { url: img11, title: "Taj-Mahal, Agra" },
];
const zoomimg2 = [
  { url: img13, title: "Dubai" },
  { url: img14, title: "Sydney" },
  { url: img15, title: "Singapore" },
];

const sliderstyle = {
  width: "100vw",
  height: "80vh",
  margin: "0 auto",
};

const title2 = "POPULAR DESTINATION IN INDIA";
const summary2 =
  "India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. The world seventh largest nation by area and the second largest in terms of population, India boasts a rich heritage that s the result of centuries of different cultures and religions leaving their mark";
const title3 = "POPULAR DESTINATION INTERNATIONAL";
const summary3 =
  "Mother Earth along with mankind have co-created some of the most spectacular places on this planet.From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!";
const title4 = "FEATURED TOURS IN INDIA";
const summary4 =
  "India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. The world seventhlargest tourist nation by area and the second largest in terms of population";
const title5 = "Gallery";
const summary5 = "At Jingle Holiday Bazar All Over India Destination Gallery";
const title6 = "POPULAR HOTELS";
const summary6 =
  "At Jingle Holiday Bazar Brovide Best Hotel facilty National And International";

function Home() {
  return (
    <>
      <div style={sliderstyle}>
        {" "}
        <Imageslider slides={slides} />
      </div>

      <ServiceCard />
      <Services title={title2} summary={summary2} />

      <ThreeImage imgs={zoomimg1} />
      <Services title={title3} summary={summary3} />
      <ThreeImage imgs={zoomimg2} />
      <div className="flex justify-center">
        <button className="bg-black text-white  rounded-full py-2 text-center hover:bg-white hover:text-black hover:border-black destbtn px-8">
          All Destinations
        </button>
      </div>
      <Services title={title4} summary={summary4} />
      <Plac />
      <Services title={title5} summary={summary5} />
      <ImageGallery />
      <Services title={title6} summary={summary6} />
      <Place2 />
    </>
  );
}

export default Home;
