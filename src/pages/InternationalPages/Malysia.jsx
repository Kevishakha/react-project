import React from "react";
import PageImage from "../../components/PageImage";
import images from "../../assets/studentTourim.webp";
import SameImg from "./SameImg";
import img1 from "../../assets/Malysiaimg/borneo-tour-package.webp";
import img2 from "../../assets/Malysiaimg/cameron-tour-package.webp";
import img3 from "../../assets/Malysiaimg/kuala-lumpur-tour-package.webp";
import img4 from "../../assets/Malysiaimg/langkawi-tour-package.webp";
import img5 from "../../assets/Malysiaimg/malacca-tour-package.webp";
import img6 from "../../assets/Malysiaimg/penang-tour-package.webp";
import img7 from "../../assets/Malysiaimg/scottish-highlands-tour-package.webp";

const imgArr = [
  {
    id: 1,
    img: img1,
    place: "Borneo Tour",
    about:
      "Borneo is an ideal destination for nature enthusiasts! The Sepilok Orangutan Rehabilitation Centre offers a chance to observe orangutans, while the mesmerizing Mulu Caves are perfect for exploration. Spot wildlife on a river cruise along Kinabatangan River or experience the traditional longhouses in Sarawak. Moreover, Sipadan Island is exquisite coral reefs are a must-see!",
  },
  {
    id: 2,
    img: img2,
    place: "Cameron Tour",
    about:
      "Cameron has the freedom to explore a range of sightseeing options based on his interests. He can opt to visit historical landmarks such as the Tower of London or Westminster Abbey, appreciate art at the British Museum or the National Gallery, or take pleasure in the picturesque views of the city from the London Eye or the Shard. Additionally, he can also check out other popular attractions such as Buckingham Palace and the iconic Big Ben.",
  },
  {
    id: 3,
    img: img3,
    place: "Kuala Lumpur",
    about:
      "Kuala Lumpur, the capital of Malaysia, is a vibrant city that blends modern architecture with a rich cultural heritage. Some of its top attractions include the iconic Petronas Twin Towers, Batu Caves, Merdeka Square, and Central Market. Other must-visit places include Chinatown, the National Museum, and KL Tower. Don not miss the chance to sample the local cuisine at Jalan Alor or experience the exciting nightlife in Bukit Bintang.",
  },
  {
    id: 4,
    img: img4,
    place: "Langkawi Tour",
    about:
      "Langkawi is a lovely island located in Malaysia, renowned for its stunning beaches, lush forests, and breathtaking landscapes. Visitors can enjoy a cable car ride to the top of Mount Mat Cincang for spectacular views or explore the Langkawi Sky Bridge. Popular attractions also include the Langkawi Wildlife Park and the Underwater World Langkawi. ",
  },
  {
    id: 5,
    img: img5,
    place: "Malacca",
    about:
      "Malacca is a fascinating city on the west coast of Malaysia that is worth visiting. It boasts a UNESCO-listed historic district with colorful buildings, St. Paul is Church, and the Malacca Sultanate Palace Museum, all of which are steeped in history. The Malacca River Cruise offers a unique perspective of the city, and you can enjoy delicious local cuisine and explore vibrant night markets.",
  },
  {
    id: 6,
    img: img6,
    place: "Penang",
    about:
      "Penang is a state located in Malaysia that boasts a rich blend of cultures and history. Its capital city, George Town, has been declared a UNESCO World Heritage Site due to its abundance of historical landmarks, street art, and museums. Additionally, Kek Lok Si Temple, Penang Hill, Tropical Spice Garden, and Batu Ferringhi night market are other highly sought-after tourist attractions. And of course, one must not forget to indulge in Penang is renowned local street food.",
  },
  {
    id: 7,
    img: img7,
    place: "Scotland Highlands Tour",
    about:
      "Scotland Highlands are a breathtaking and highly recommended destination. You can witness the stunning landscapes of Cairngorms National Park, hike the rugged terrain of Ben Nevis, and explore the mysterious Loch Ness. To experience traditional Scottish culture, explore historic castles and savor local delicacies such as haggis and whisky.",
  },
];

function Malysia() {
  const summary =
    "Experience the magic of Malaysia with Jingle Holiday Bazar! Embark on an extraordinary sightseeing adventure that showcases the country is beauty and excitement. Start in Kuala Lumpur, a lively city boasting towering skyscrapers, vibrant markets, and delectable street food. Do not miss the iconic Petronas Twin Towers and take a leisurely stroll through the lush KLCC Park. Next, journey to the historic city of Melaka and immerse yourself in its ancient architecture and rich heritage. Indulge in local delicacies to savor the true flavors of the region. Relax on the breathtaking beaches of Langkawi, where you can soak in crystal-clear waters and sink your toes into white sandy shores. Take an exhilarating cable car ride to the Langkawi Sky Bridge for awe-inspiring views. Venture into the lush rainforests of Borneo, home to extraordinary wildlife like the famous orangutans. Trek through nature reserves and marvel at the wonders of nature. Jingle Holiday Bazar promises an unforgettable Malaysia sightseeing journey, creating cherished memories that will last a lifetime. Get ready for a remarkable exploration of this diverse and captivating country!";
  return (
    <>
      <PageImage
        Page={"Malysia"}
        pagePath={"/malysia"}
        images={images}
        PageHead={"Malysia Tour Details"}
      />
      <SameImg place={"Malysia"} summaryOfPlace={summary} imgArr={imgArr} />
    </>
  );
}

export default Malysia;
