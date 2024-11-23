import React from "react";
import { Link } from "react-router-dom";
import img16 from "../assets/Lehladakh.webp";
import img17 from "../assets/Solang-Valley.webp";
import img18 from "../assets/goa.webp";

const item = [
  {
    title: "Week At Thiksey Monastery",
    desc: "This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.",
    contact: "WhatsApp Now More Details",
  },
  {
    title: "Week At Solang Valley, Manali",
    desc: "A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking for snow-based activities and sports, winters are the best time to visit",
    contact: "Contact",
  },
  {
    title: "Week At Beach in Goa",
    desc: "Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of a life without stress and worries. The multitude of beaches in Goa",
    contact: "Contact",
  },
];

function Plac() {
  return (
    <>
      <div className="h-full w-full p-6">
        <div className="grid grid-cols-2 grid-rows-2 place1MainDiv  ">
          <div className="row-span-2  px-2 grid grid-rows-2 place1Div mb-4 changeDiv">
            <div className="w-full grid-rows-1 appear-Animate  ">
              <img
                src={img16}
                className="h-full w-full bg-cover object-fill  "
              />
            </div>
            <div className="mt-3 grid-rows-1 ">
              <h1 className=" text-blue-400 text-2xl hover:underline hover:text-blue-900 text-center mb-3 font-semibold">
                {item[0].title}{" "}
              </h1>
              <p className="text-xl text-black italic mt-3 ">{item[0].desc}</p>
              <Link className="italic text-blue-400 ">{item[0].contact}</Link>
            </div>
          </div>

          <div className="col-span-1 row-span-1 grid grid-cols-2 place1Div changeDiv2">
            <div className="w-full h-full appear-Animate ">
              <img
                src={img17}
                className="h-full w-full bg-cover object-fill bg-center   "
              />
            </div>
            <div className="px-6 mt-3">
              <h1 className=" text-blue-400 text-2xl hover:underline hover:text-blue-900  mb-3 text-justify font-semibold ">
                {item[1].title}{" "}
              </h1>
              <p className="text-xl text-black italic mt-3 mb-3">
                {item[1].desc}
              </p>
              <Link className="italic text-blue-400">{item[1].contact}</Link>
            </div>
          </div>

          <div className="col-span-1 row-span-1 grid grid-cols-2 mt-10 place1Div changeDiv2">
            <div className="w-full appear-Animate ">
              <img
                src={img18}
                className="h-full w-full bg-cover object-fill bg-center  "
              />
            </div>
            <div className="px-6 mt-3">
              <h1 className=" text-blue-400 text-2xl hover:underline hover:text-blue-900  mb-3 text-justify font-semibold ">
                {item[2].title}{" "}
              </h1>
              <p className="text-xl text-black italic  mb-3">{item[2].desc}</p>
              <Link className="italic text-blue-400 ">{item[1].contact}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plac;
