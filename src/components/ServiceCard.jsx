import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import Services from "./Services";

const title1 = "Our Service";
const summary1 =
  " At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday booking you make with us by bringing to you the best price deals; be it flights, tours or hotels. Our unique budget";

const items = [
  {
    id: 1,
    img: <FaHome />,
    title: "Jingle Holiday Bazar Homestays",
    subtitle: "Book Villas, Apartment and Resorts",
    summary:
      "Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to closely savour the local flavours of a place, and prefer the comforts of a homely environment, Jingle Holiday Bazar Homestays is the answer. Jingle Holiday Bazar already has over 3500 homestay properties and is expanding fast. It has a stronghold in South India and across most hill stations of North India, with these places providing unique homestay experiences to customers. Some of its most popular homestay destinations are Goa, Manali, Shimla, Coorg, Wayanad, among other places.",
  },
  {
    id: 2,
    img: <MdLocalHotel />,
    title: "Jingle Holiday Bazar Hotels",
    subtitle: "Book Hotels with Jingle Holiday Bazar.com",
    summary:
      "We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a comfortable stay which is a bang for your bucks, is offering you online hotel booking that guarantees you hygienic, sanitised rooms across hotels in India. Explore a raft of interesting features such as Clean Pass stays, travel again offers and long stay discounts encouraging you to travel again, make your hotel booking while keeping your anxieties at bay.",
  },
  {
    id: 3,
    img: <MdFlight />,
    title: "Jingle Holiday Bazar Flights",
    subtitle: "Why to book Flights Online with Jingle Holiday Bazar.com",
    summary:
      "Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether you are travelling for business or on leisure, you cannot make an itinerary until you have first and foremost booked your flights. Procuring an air ticket is a mandatory first step once your travel plans are confirmed. It feels as though half the job is done the moment you secure confirmed flight ticket booking in your hand. The entire activity of searching air connectivity between two cities, checking the schedule of the flight and zeroing in on one that most convenient to you can feel like a lot of work especially if you are in a hurry to book your flights.",
  },
];

function ServiceCard() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleSummaryOverflow = (id) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };






  return (
    <>
      <Services title={title1} summary={summary1} />
      <div className="w-full    bg-white flex justify-center mt-5 mb-10 ">
        {/* the div where the all components will render by one by one in three row particular one component */}
        <div className="grid grid-row grid-cols-3 gap-8  serviceCardDiv m-auto scroll-area  ">
          {items.map((item) => {
            const isExpanded = expandedCards[item.id] || false;
            {
              /* the div of particular one component */
            }
            return (
              <div
                key={item.id}
                className=" flex flex-col gap-2 p-5 items-center bg-slate-50 rounded shadow-lg servicecard flip-Animate"
                style={{
                  maxHeight: isExpanded ? "none" : "400px",
                }}
              >
                <div className="text-3xl text-green-800 m-auto">{item.img}</div>
                <h4 className="text-center font-bold">{item.title}</h4>
                <h6 className="text-center text-gray-500">{item.subtitle}</h6>
                <div
                  className="summary text-center text-xl"
                  style={{
                    overflowY: isExpanded ? "auto" : "hidden",
                    maxHeight: isExpanded ? "none" : "180px",
                  }}
                >
                  {item.summary}
                </div>
                <button
                  className="bg-black text-white w-24 py-2 px-2 mt-4"
                  onClick={() => toggleSummaryOverflow(item.id)}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
