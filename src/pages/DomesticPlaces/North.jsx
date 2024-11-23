import React from "react";
import CommonGallery from "../../components/ImageGallery/CommonGallery";
import { NorthIndia } from "../../components/ImageGallery/ImageGallery";
import PageImage from "../../components/PageImage";
import images from "../../components/ImageGallery/NorthIndiaimg/Taj-mahal.webp";
import Services from "../../components/Services";
const title = "NORTH INDIA GALLERY";
const summary =
  "North India is like a set of thali that has every desirable element to satisfy your taste buds. From the poetic beauty of Kashmir to the royal grandeur of Rajasthan. From the purest symbol of love, Taj Mahal to the holiest of all rivers, the Ganges. North India is a treasure trove of vast nature, authentic culture and an array of experiences filled with serenity. Exceptionally blessed with a diverse landscape, it has a rich cultural heritage that leaves you overwhelmed. North India comprises Jammu & Kashmir, Delhi, Uttar Pradesh, Haryana, Punjab, Rajasthan, Himachal Pradesh and Uttarakhand.";

function North() {
  return (
    <>
      <PageImage
        Page={"North"}
        pagePath={"/north"}
        images={images}
        PageHead={"North"}
      />
      <Services title={title} summary={summary} />

      <CommonGallery imgArr={NorthIndia} />
    </>
  );
}

export default North;
