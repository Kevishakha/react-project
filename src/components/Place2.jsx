import React from "react";
import img16 from "../assets/Taj-Aravali-Resort-Spa.webp";
import img17 from "../assets/manaliti.webp";
import img18 from "../assets/hideout.webp";

const item = [
  {
    title: "Taj Aravali Resort & Spa",
    desc: "Prices for Taj Aravali Resort and Spa one of the best hotels in India, starts at ₹ 12999+ per night",
  },
  {
    title: "",
    desc: "Set in Manāli Hotel Mountain face by Snow City Hotels offers accommodation with a restaurant, free private parking, a shared lounge and a garden.₹ 1,440+ per night",
  },
  {
    title: "Hideout Premiere",
    desc: "Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our guests the opportunity to enjoy Goa in all her glory. Whether it’s the beaches ₹ 4499+",
  },
];

function Place2() {
  return (
    <>
      <div className="h-full w-full p-6">
        <div className="grid grid-cols-2 grid-rows-2 h-screen w-screen p-4 place1MainDiv m-auto ">
          <div className="flex flex-col h-full w-full gap-4 row-span-2 col-span-1 place1MainDiv1 ">
            <div className=" grid grid-cols-2 h-1/2 w-full place1Div changeDiv2">
              <div className="placeimg appear-Animate ">
                <img
                  src={img16}
                  className="h-full w-full bg-cover object-fill "
                />
              </div>
              <div className="px-6 mt-3">
                <h1 className=" text-black  text-3xl hover:underline hover:text-blue-900  mb-3 text-justify font-semibold ">
                  {item[0].title}{" "}
                </h1>
                <p className="text-xl text-black italic mt-3 mb-3">
                  {item[0].desc}
                </p>
              </div>
            </div>

            <div className=" grid grid-cols-2 h-1/2 w-full place1Div changeDiv2">
              <div className="w-full placeimg appear-Animate">
                <img
                  src={img17}
                  className="h-full w-full bg-cover object-fill "
                />
              </div>
              <div className="px-6 mt-3">
                <p className="text-xl text-black  italic  mb-3">
                  {item[1].desc}
                </p>
              </div>
            </div>
          </div>

          <div className=" grid grid-rows-2 h-full w-full row-span-2 col-span-1 place1Div place1MainDiv1 changeDiv">
            <div
              className="w-full placeimg appear-Animate "
            >
              <img src={img18} className="w-full h-full bg-cover bg-center " />
            </div>
            <div className="w-full h-1/2">
              <h1 className=" text-black  text-3xl hover:underline hover:text-blue-900 text-center mb-3 font-semibold">
                {item[2].title}{" "}
              </h1>
              <p className="text-xl text-black italic mt-3 ">{item[2].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Place2;
