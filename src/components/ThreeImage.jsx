import React from "react";

function ThreeImage({ imgs }) {
  return (
    <div className="h-screen w-screen flex flex-row gap-4 p-4 threeimgMainDiv">
      <div className="h-full w-1/2 threeimgDiv">
        <div
          className="zoomimg overflow-hidden h-full w-full relative bg-center bg-cover threeimgImage"
          style={{ backgroundImage: `url(${imgs[0].url})` }}
        >
          <div className="absolute text-white text-center text-2xl font-bold bottom-5 w-full threeimgText">
            {imgs[0].title}
          </div>
        </div>
      </div>

      <div className="h-full w-1/2 threeimgDiv threeimgDiv2 p-0 m-0 flex flex-col justify-end gap-2">
        <div
          className="zoomimg overflow-hidden h-1/2 w-full relative  bg-cover bg-center threeimgImage2"
          style={{ backgroundImage: `url(${imgs[1].url})` }}
        >
          <div className="absolute text-white text-center text-2xl font-bold bottom-5 w-full threeimgText">
            {imgs[1].title}
          </div>
        </div>

        <div
          className="zoomimg overflow-hidden h-1/2 w-full relative bg-cover bg-center  threeimgImage2"
          style={{ backgroundImage: `url(${imgs[2].url})` }}
        >
          <div className="absolute text-white text-center text-2xl font-bold bottom-5 w-full threeimgText">
            {imgs[2].title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeImage;
