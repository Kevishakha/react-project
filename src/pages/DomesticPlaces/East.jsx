import React from "react";
import CommonGallery from "../../components/ImageGallery/CommonGallery";
import { EastIndia } from "../../components/ImageGallery/ImageGallery";
import PageImage from "../../components/PageImage";
import images from "../../components/ImageGallery/EastIndiaimg/Pelling.webp";
import Services from "../../components/Services";

const title = "EAST INDIA GALLERY";
const summary =
  "The Eastern Zone of India is rich in Cultural Heritage. You can have a taste of beaches, temples, monasteries, Buddhist circuits with a rural touch.The most popular tourist destinations for this region are, Calcutta, Former Capital of India, Puri & Bhubaneshwar, Buddhist Circuit in Bihar, Monastries in Sikkim, Kanchenjunga Range of Mountains in Darjeeling, etc";

function East({}) {
  return (
    <>
      <PageImage
        Page={"East"}
        pagePath={"/east"}
        images={images}
        PageHead={"East"}
      />
      <Services title={title} summary={summary} />
      <CommonGallery imgArr={EastIndia} />
    </>
  );
}

export default East;
