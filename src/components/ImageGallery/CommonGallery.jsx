import React from "react";

function CommonGallery({ imgArr }) {
  return (
    <>
      <div className="h-auto w-screen  flex flex-row mt-4 justify-items-center flex-wrap justify-center ">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 px-10 bg-slate-200  py-10 w-full imgGallMainDiv justify-center">
          <div className="flex flex-col  bg-white h-full w-1/5 imageContainer items-center justify-center appear-Animate ">
            <div
              className=" imageCard "
              style={{
                backgroundImage: `url(${imgArr[0].url})`,
                backgroundPosition: "center",
              }}
            >
              <p className="imgCartTitle ">{imgArr[0].title}</p>
            </div>
          </div>
          <div className="flex flex-col  bg-white h-full w-1/5 imageContainer items-center justify-center appear-Animate ">
            <div
              className=" imageCard "
              style={{
                backgroundImage: `url(${imgArr[1].url})`,
                backgroundPosition: "center",
              }}
            >
              <div className="imgCartTitle ">{imgArr[1].title}</div>
            </div>
          </div>
          <div className="flex flex-col  bg-white h-full w-1/5 imageContainer items-center justify-center appear-Animate">
            <div
              className=" imageCard "
              style={{
                backgroundImage: `url(${imgArr[2].url})`,
                backgroundPosition: "center",
              }}
            >
              <div className="imgCartTitle ">{imgArr[2].title}</div>
            </div>
          </div>
          <div className="flex flex-col  bg-white h-full w-1/5 imageContainer items-center justify-center appear-Animate">
            <div
              className=" imageCard "
              style={{
                backgroundImage: `url(${imgArr[3].url})`,
                backgroundPosition: "center",
              }}
            >
              <div className="imgCartTitle ">{imgArr[3].title}</div>
            </div>
          </div>
          <div className="flex flex-col  bg-white h-full w-1/5 imageContainer items-center justify-center appear-Animate">
            <div
              className=" imageCard "
              style={{
                backgroundImage: `url(${imgArr[4].url})`,
                backgroundPosition: "center",
              }}
            >
              <div className="imgCartTitle ">{imgArr[4].title}</div>
            </div>
          </div>
          <div className="flex flex-col  bg-white h-full w-1/5 imageContainer items-center justify-center appear-Animate">
            <div
              className=" imageCard "
              style={{
                backgroundImage: `url(${imgArr[5].url})`,
                backgroundPosition: "center",
              }}
            >
              <div className="imgCartTitle ">{imgArr[5].title}</div>
            </div>
          </div>
          <div className="flex flex-col  bg-white h-full w-1/5 imageContainer items-center justify-center appear-Animate">
            <div
              className=" imageCard "
              style={{
                backgroundImage: `url(${imgArr[6].url})`,
                backgroundPosition: "center",
              }}
            >
              <div className="imgCartTitle ">{imgArr[6].title}</div>
            </div>
          </div>
          <div className="flex flex-col  bg-white h-full w-1/5 imageContainer items-center justify-center appear-Animate">
            <div
              className=" imageCard "
              style={{
                backgroundImage: `url(${imgArr[7].url})`,
                backgroundPosition: "center",
              }}
            >
              <div className="imgCartTitle ">{imgArr[7].title}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonGallery;
