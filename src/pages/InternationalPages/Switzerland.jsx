import React from "react";
import PageImage from "../../components/PageImage";
import images from "../../assets/studentTourim.webp";
import SameImg from "./SameImg";
import img1 from "../../assets/Swittzerlandimg/bern-tour-package.webp";
import img2 from "../../assets/Swittzerlandimg/grindelwald-tour-package.webp";
import img3 from "../../assets/Swittzerlandimg/zurich-tour-package.webp";
import img4 from "../../assets/Swittzerlandimg/zermatt-tour-package.webp";
import img5 from "../../assets/Swittzerlandimg/lugano-tour-package.webp";
import img6 from "../../assets/Swittzerlandimg/interlaken-tour-package.webp";
import img7 from "../../assets/Swittzerlandimg/lucerne-tour-package.webp";

const imgArr = [
  {
    id: 1,
    img: img1,
    place: "Bern",
    about:
      "Bern is the capital of Switzerland and it offers many interesting sights. One of the highlights is the Old Town, which has been recognized as a UNESCO World Heritage Site. You can admire medieval architecture and the famous Zytglogge clock tower. Take a stroll along the Aare River to enjoy the picturesque views of the city. Don not miss the opportunity to visit the Bern Cathedral and the Bear Park while you are in town.",
  },
  {
    id: 2,
    img: img2,
    place: "Grindelwald",
    about:
      "Grindelwald is a picturesque Swiss village nestled in the Alps that boasts stunning vistas of the surrounding mountains. Visitors can take a cable car up to Mount First to enjoy a breathtaking panorama or wander through the charming streets and admire the traditional Swiss architecture. Outdoor enthusiasts can also enjoy a variety of activities like hiking, skiing, and paragliding in the area.",
  },
  {
    id: 3,
    img: img3,
    place: "Zurich",
    about:
      "Zurich, a city located in Switzerland, offers a variety of sightseeing opportunities. Visitors can explore famous landmarks such as the Grossmünster church and the luxurious Bahnhofstrasse shopping street. They can also take a relaxing stroll along the Limmat river or enjoy breathtaking views from the Uetliberg mountain. Additionally, tourists should not miss the chance to visit the Swiss National Museum or wander through the charming Old Town with its narrow streets and historic buildings.",
  },
  {
    id: 4,
    img: img4,
    place: "Zermatt",
    about:
      "Zermatt is a beautiful destination located in the Swiss Alps that offers breathtaking views of the Matterhorn peak. One of the best ways to experience these stunning views is by taking a ride on the Gornergrat Bahn, a cogwheel train that takes you to the top of Gornergrat mountain. The views from the top are simply breathtaking. Another must-visit attraction in Zermatt is the Matterhorn Museum, where you can learn about the fascinating history of the region. And if you want to see more stunning views, climb up the Sunnegga mountain. ",
  },
  {
    id: 5,
    img: img5,
    place: "Lugano",
    about:
      "Lugano is a charming city situated in the southern region of Switzerland that offers a multitude of sightseeing opportunities. You can take a leisurely stroll along the picturesque lakefront or explore the historic old town. There are several places of interest to visit, such as the San Lorenzo Cathedral and the Hermann Hesse Museum. For breathtaking views of the city, you can take a funicular to Monte Brè or Monte San Salvatore. And, of course, don not miss out on indulging in some of the delicious Swiss cuisine that Lugano has to offer.",
  },
  {
    id: 6,
    img: img6,
    place: "Interlaken",
    about:
      "Interlaken is a charming town situated in the heart of the Swiss Alps, renowned for its breathtaking vistas of the surrounding mountains and crystal-clear lakes. It is a popular destination for tourists seeking adventure and scenic beauty. One can take a scenic train ride to Jungfraujoch, the highest railway station in Europe, or enjoy paragliding over the stunning landscape. The town is streets are lined with various shops, restaurants, and historic buildings, offering visitors an opportunity to explore and experience the local culture.",
  },
  {
    id: 7,
    img: img7,
    place: "Lucerne",
    about:
      "Lucerne is a picturesque city in Switzerland that is perfect for sightseeing. You can start by visiting the iconic Chapel Bridge and Water Tower, then wander the charming cobblestone streets of the Old Town. Don not forget to see the famous Lion Monument and the modern KKL cultural center. And for stunning views of the surrounding Alps, you can take a boat ride on Lake Lucerne.",
  },
];

function Switzerland() {
  const summary =
    "Experience the enchanting beauty of Switzerland with our delightful holiday bazar! Immerse yourself in the breathtaking landscapes of the Swiss Alps, where snow-capped mountains and lush meadows await. Glide on pristine lakes and enjoy the charm of picturesque villages like never before. Discover iconic cities like Zurich, Geneva, and Lucerne, where rich history seamlessly blends with modernity. Savor the delights of Swiss chocolates and cheeses, leaving you craving for more. Thrill-seekers can embark on exciting adventures like skiing, hiking, and paragliding. Don not miss the chance to visit famous landmarks such as the Matterhorn and Jungfrau, capturing picture-perfect moments throughout your journey. Our jingle holiday bazar promises an unforgettable experience with expert guides, comfortable accommodations, and hassle-free travel. Join us on this memorable expedition and create cherished memories that will last a lifetime in the mesmerizing wonderland of Switzerland!";
  return (
    <>
      <PageImage
        Page={"Switzerland"}
        pagePath={"/switzerland"}
        images={images}
        PageHead={" Tour Details"}
      />
      <SameImg place={"Switzerland"} summaryOfPlace={summary} imgArr={imgArr} />
    </>
  );
}

export default Switzerland;
