import React from "react";
import CommonGallery from "../../components/ImageGallery/CommonGallery";
import { SouthIndia } from "../../components/ImageGallery/ImageGallery";
import PageImage from "../../components/PageImage";
import images from "../../components/ImageGallery/SouthIndiaImg/Gokarna-1.webp";
import Services from "../../components/Services";

const title = "SOUTH INDIA GALLERY";
const summary =
  "South India has a lot more to offer than mere beaches and spice plantations. It’s a melting pot of cultures, cuisines, traditions, and languages. From honeymooning couples to families, the southern states of Kerala, Karnataka, Andhra Pradesh, and Tamil Nadu welcome tourists with warmth and love. There’s something to do for everyone here – water sports for the adventurous, backwaters for the romantics, trekking trails for hikers, and panoramic vistas for nature lovers. Read ahead to know about the top places to visit in South India";

function South() {
  return (
    <>
      <PageImage
        Page={"South"}
        pagePath={"/south"}
        images={images}
        PageHead={"South"}
      />
      <Services title={title} summary={summary} />
      <CommonGallery imgArr={SouthIndia} />
    </>
  );
}

export default South;
