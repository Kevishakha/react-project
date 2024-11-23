import React from "react";
import PageImage from "../../components/PageImage";
import images from "../../assets/studentTourim.webp";
import SameImg from "./SameImg";
import img1 from "../../assets/Belgiumimg/antwerp-tour-package.webp";
import img2 from "../../assets/Belgiumimg/bruges-tour-package.webp";
import img3 from "../../assets/Belgiumimg/brussels-tour-package.webp";
import img4 from "../../assets/Belgiumimg/dinant-tour-package.webp";
import img5 from "../../assets/Belgiumimg/ypres-tour-package.webp";

const imgArr = [
  {
    id: 1,
    img: img1,
    place: "Antwerp",
    about:
      "Antwerp, located in Belgium, offers numerous fascinating tourist attractions to explore. Visitors can marvel at the stunning Cathedral of Our Lady and delve into the rich history of the Museum Plantin-Moretus. The Antwerp Zoo is a charming destination to observe various animals, while the lively Grote Markt square offers a vibrant atmosphere. Additionally, the city boasts a renowned diamond district and mouth-watering cuisine to indulge in.",
  },
  {
    id: 2,
    img: img2,
    place: "Bruges",
    about:
      "Bruges is a beautiful city in Belgium that offers visitors many sightseeing opportunities. You can explore the famous Belfry tower, take a boat tour along the picturesque canals, visit the Markt square and Gothic-style City Hall, admire the artwork on display at the Groeningemuseum, and indulge in delicious Belgian chocolate at one of the many local chocolatiers. There is plenty to do and see in Bruges!",
  },
  {
    id: 3,
    img: img3,
    place: "Brussels",
    about:
      "Brussels, the capital of Belgium, offers many sightseeing opportunities. Tour the iconic Atomium, a one-of-a-kind building designed to resemble an atom. Explore the historical Grand Place, recognized as a UNESCO World Heritage site, and admire the breathtaking architecture. Take a leisurely stroll through the charming streets of the Marolles neighborhood, or stop by the renowned Manneken Pis statue.",
  },
  {
    id: 4,
    img: img4,
    place: "Dinant",
    about:
      "Dinant is a charming town located in Belgium that sits on the banks of the Meuse River. This town is renowned for its stunning architecture, impressive citadel, and rich history. Tourists must not miss visiting some of its iconic landmarks such as the Collegiate Church of Notre-Dame, the Saxophone Museum, the Maison Leffe Brewery, and the Cave La Merveilleuse. ",
  },
  {
    id: 5,
    img: img5,
    place: "Ypres",
    about:
      "Ypres is a well-known tourist spot in Belgium is Flemish region. The city boasts rich history and stunning architecture, offering visitors the chance to explore World War I battlefields, monuments, the Menin Gate Memorial, the In Flanders Fields Museum, and the Gothic-style Saint Martin Cathedral. There are also charming cafes and restaurants to enjoy while taking in the sights.",
  },
];

function Belgium() {
  const summary =
    "Experience the enchanting sights of Belgium, a delightful holiday bazar! Begin in Brussels, the capital city, where you will be amazed by the iconic Atomium and the majestic Royal Palace. Do not forget to treat yourself to the famous Belgian waffles and chocolates! Next, head to Bruges, a fairytale-like town with charming canals and medieval buildings. Enjoy a serene boat ride and soak in the scenic beauty. Ghent, another treasure, blends history and modernity. Explore the impressive Gravensteen Castle and the lively street art scene. In Antwerp, a shopper paradise, admire the grand Cathedral of Our Lady and indulge in the world of fashion and diamonds. Nature lovers will be thrilled in Ardennes, a lush region offering forests and exciting outdoor activities. End your journey in picturesque Dinant, renowned for its cliffs and association with the saxophone. Belgium diverse attractions promise an unforgettable adventure, creating cherished memories of your jingle holiday bazar!";
  return (
    <>
      <PageImage
        Page={"Belgium"}
        pagePath={"/belgium"}
        images={images}
        PageHead={"Belgium Tour Details"}
      />
      <SameImg place={"Belgium"} summaryOfPlace={summary} imgArr={imgArr} />
    </>
  );
}

export default Belgium;
