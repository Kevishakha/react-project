import React from "react";
import PageImage from "../../components/PageImage";
import images from "../../assets/studentTourim.webp";
import SameImg from "./SameImg";
import img1 from "../../assets/Maldives/relaxing-beaches-maldives-tour-package.webp";
import img2 from "../../assets/Maldives/jingle-holiday-bazar-culture-maldives-tour-package.webp";
import img3 from "../../assets/Maldives/island-maldives-tour-package.webp";
import img4 from "../../assets/Maldives/sunset-cruises-maldives-tour-package.webp";
import img5 from "../../assets/Maldives/water-sports-maldives-tour-package.webp";

const imgArr = [
  {
    id: 1,
    img: img1,
    place: "Relaxing-Maldives-Beaches",
    about:
      "Beaches are a popular spot for both tourists and locals to unwind and enjoy the natural beauty. With miles of pristine coastline, visitors can indulge in activities like swimming, sunbathing, and leisurely walks. Some beaches also provide picturesque views of nearby islands or historic landmarks, making them ideal for sightseeing while relishing the sand and sea breeze.",
  },
  {
    id: 2,
    img: img2,
    place: "Maldives Culture Tour",
    about:
      "The Maldives has a distinct culture influenced by its geography and Islamic beliefs. Tourists can attend cultural events to experience traditional music and dance performances such as boduberu drumming and thaa and langiri songs. Additionally, historical sites like the Hukuru Miskiy mosque are worth visiting. The country is beautiful beaches and underwater life make it an ideal location for snorkeling and diving.",
  },
  {
    id: 3,
    img: img3,
    place: "Island Tour",
    about:
      "Island hopping is an excellent way to explore multiple islands in one trip. It is an opportunity to witness stunning landscapes, crystal-clear waters, and unique wildlife such as sea turtles and dolphins. Remember to pack your snorkel gear to explore the vibrant coral reefs. Each island has its own charm and culture, making it an unforgettable adventure.",
  },
  {
    id: 4,
    img: img4,
    place: "Sunset cruises Tour",
    about:
      "Watching the sunset on a cruise in the Maldives is an experience that you should not miss. The view of the sun going down and the sky painted with a mix of orange and pink colors is simply breathtaking. You might even get the chance to spot dolphins and other marine animals while on the trip, making it a truly unforgettable sightseeing adventure that you will cherish. ",
  },
  {
    id: 5,
    img: img5,
    place: "Water sports Tour",
    about:
      "This destination offers a variety of water sports activities, such as snorkeling, scuba diving, surfing, kayaking, and windsurfing, which are great ways to have fun in the water. The water is clear and there is an abundance of colorful marine life to observe. Besides aquatic activities, visitors can explore the local culture, go sightseeing, and enjoy the beautiful beaches and resorts.",
  },
];

function Maldives() {
  const summary =
    "Discover the wonders of the Maldives, a tropical paradise offering stunning sights and pristine waters! Jingle Holiday Bazar welcomes you to an unforgettable sightseeing experience. Delight in the vibrant coral reefs as you snorkel or dive into the mesmerizing underwater world. Be amazed by the colorful marine life, from playful dolphins to majestic sea turtles. Stroll along soft, sandy beaches, where gentle turquoise waves caress the shore. Soak up the warm sun and take a refreshing dip in the inviting ocean. Immerse yourself in the rich Maldivian culture by visiting local islands. Unearth traditional handicrafts and savor delectable local cuisine. Embark on an extraordinary adventure by hopping on a boat and sailing through picturesque atolls. Witness breathtaking sunsets that paint the sky in mesmerizing hues. Relax and rejuvenate at luxurious resorts, surrounded by lush greenery and tranquil lagoons. Indulge in spa treatments to enhance your island experience. With Jingle Holiday Bazar, your Maldives sightseeing journey will be filled with joy, laughter, and cherished memories. Book now for your dreamy island getaway!";
  return (
    <>
      <PageImage
        Page={"Maldives"}
        pagePath={"/maldives"}
        images={images}
        PageHead={"Maldives Tour Details"}
      />
      <SameImg place={"Maldives"} summaryOfPlace={summary} imgArr={imgArr} />
    </>
  );
}

export default Maldives;
