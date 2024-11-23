import React from "react";
import PageImage from "../../components/PageImage";
import images from "../../assets/studentTourim.webp";
import SameImg from "./SameImg";
import img1 from "../../assets/Thailandimg/bangkok-tour-package.webp";
import img2 from "../../assets/Thailandimg/phuket-tour-package.webp";
import img3 from "../../assets/Thailandimg/krabi-tour-package.webp";
import img4 from "../../assets/Thailandimg/ayutthaya-tour-package.webp";
import img5 from "../../assets/Thailandimg/koh-phi-phi-tour-package.webp";
import img6 from "../../assets/Thailandimg/jingle-holiday-bazar-kanchanaburi-tour-package.webp";

const imgArr = [
  {
    id: 1,
    img: img1,
    place: "Bangkok",
    about:
      "There are numerous things to do and see in Bangkok, the capital city of Thailand. Visitors can explore the stunning Grand Palace and Wat Phra Kaew, take a boat ride along the Chao Phraya River, shop for unique items at the Chatuchak Weekend Market, explore the vibrant Chinatown, and savor delicious Thai street food. Additionally, Bangkok offers exciting nightlife and entertainment options for visitors to enjoy. ",
  },
  {
    id: 2,
    img: img2,
    place: "Phuket",
    about:
      "Phuket is a well-known destination in Thailand that attracts many tourists due to its beautiful beaches, lively nightlife, and rich cultural heritage. The must-see attractions include the Big Buddha, Wat Chalong, Old Phuket Town, and the Phi Phi Islands. Dont forget to indulge in the delicious Thai cuisine and take part in the thrilling water sports and activities available on the island..",
  },
  {
    id: 3,
    img: img3,
    place: "Krabi",
    about:
      "Krabi, located in the southern part of Thailand, is a stunning province that offers an array of exciting sights and activities to explore. Visitors can enjoy some of the top attractions like Railay Beach, Ao Nang Beach, Tiger Cave Temple, Emerald Pool, Krabi Night Market, and Phi Phi Islands. Apart from sightseeing, there are many fun activities like rock climbing, kayaking, and snorkeling to indulge in.",
  },
  { id: 4, img: img4, place: "Bangkok", about: "There are numerous " },
  { id: 5, img: img5, place: "Phuket", about: "Phuket is a island." },
  { id: 6, img: img6, place: "Krabi", about: "Krabi,  Emerald Pool," },
];

function Thailand() {
  const summary =
    "Uncover the wonders of Thailand with Jingle Holiday Bazar! Get ready for an incredible sightseeing adventure brimming with joy and excitement. Explore magnificent temples adorned with intricate designs and delve into Thailand captivating cultural heritage. Be awestruck by the mesmerizing beaches boasting crystal-clear waters and soft, white sands. Relax and bask in the glorious sunshine, finding pure bliss in these tranquil havens. Embrace the lively atmosphere of bustling markets, offering unique souvenirs and delectable street food that will tantalize your taste buds. A special treat awaits you – the chance to meet and interact with friendly elephants! Experience the thrill of an elephant ride through lush jungles, immersing yourself in the natural beauty that surrounds you. Jingle Holiday Bazar ensures a hassle-free and delightful Thailand sightseeing tour, filled with exciting surprises. Immerse yourself in the vibrant local life, creating cherished memories that will last a lifetime. Come and join us to transform your dream vacation into a reality. Thailand beauty and cultural treasures await your discovery with Jingle Holiday Bazar!";
  return (
    <>
      <PageImage
        Page={"Thailand"}
        pagePath={"/thailand"}
        images={images}
        PageHead={"Thailand Tour Details"}
      />
      <SameImg place={"Thailand"} summaryOfPlace={summary} imgArr={imgArr} />
    </>
  );
}

export default Thailand;
