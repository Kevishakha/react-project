import React from "react";
import CommonGallery from "../../components/ImageGallery/CommonGallery";
import { WestIndia } from "../../components/ImageGallery/ImageGallery";
import PageImage from "../../components/PageImage";
import images from "../../components/ImageGallery/WestIndiaimg/Goa-beaches.webp";
import Services from "../../components/Services";

const title = "WEST INDIA GALLERY";
const summary =
  "West India has an amazing potpourri of rich culture, heritage, and vivid greenery of the Ghats that make it a perfect destination for tourists. Tourists love the amazing places to visit in West India and it becomes a promising region for its temperate climate and beautiful locations. Also during the summer months, the hill stations of Western India have a number of colorful festivals that attract tourists.";

function West() {
  return (
    <>
      <PageImage
        Page={"West"}
        pagePath={"/west"}
        images={images}
        PageHead={"West"}
      />
      <Services title={title} summary={summary} />
      <CommonGallery imgArr={WestIndia} />
    </>
  );
}

export default West;
