import React from "react";
import PageImage from "../components/PageImage";
import images from "../assets/studentTourim.webp";
import { FiCheckSquare } from "react-icons/fi";
import Services from "../components/Services";

function About() {
  const title = "Our Clients review";
  const Summary =
    "Being a product of the renowned Holidays by Jingle Holiday Bazar, which is an ``ISO`` certified travel company that has the record of being the leading travel & tours company in the B2B sector, Travkart is a name that breeds trust. A 24*7 emergency and crisis support system and complete transparency regarding pricing, policy and procedures make Jingle Holiday Bazar a trusted name for safe & easy travel around the world";

  return (
    <>
      <PageImage
        Page={"About US"}
        pagePath={"/about"}
        images={images}
        PageHead={"About US"}
      />

      <div className="h-auto w-3/4 flex flex-col   m-auto items-center mb-8">
        <h1 className="font-bold text-3xl p-4 ">
          Jingle Holiday Bazar Pvt Ltd
        </h1>
        <p className="flex justify-center text-justify  text-xl italic pb-6 leading-8 ">
          Jingle Holiday Bazar Pvt Ltd is pleased to announce the opening of
          their first office in Ghaziabad. I here by in conjunction with the
          Jingle Holiday Bazar Pvt Ltd takes great pleasure in announcing the
          formation of our company to serve the needs of travellers in all
          aspects of their requirement. I have the pleasure of announcing the
          formation of Jingle Holiday Bazar Pvt Ltd, Ghaziabad specializing in
          Hotel Packages, Pilgrimage Packages,Honeymoon Packages, Corporate
          Tours, Airline / Train Ticket, Transportation etc\ Pleased to be our
          client and support us to promote our new venture Jingle Holiday Bazar
          Pvt Ltd & in return we will give you the memorable services that you
          will never forget.
        </p>

        <div className="flex justify-around w-full">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="flex justify-start items-center mb-4">
              <i className="m-2 font-extrabold">
                <FiCheckSquare />
              </i>
              We offer daily tours
            </p>
            <p className="flex justify-start items-center mb-4">
              <i className="m-2">
                <FiCheckSquare />
              </i>
              Never lose your deposit
            </p>
            <p className="flex justify-start items-center mb-4">
              <i className="m-2">
                <FiCheckSquare />
              </i>
              Handpicked hotels
            </p>
          </div>
          <div className="">
            <p className="flex justify-start items-center mb-4">
              <i className="m-2">
                <FiCheckSquare />
              </i>
              Best price guarantee
            </p>
            <p className="flex justify-start items-center mb-4">
              <i className="m-2">
                <FiCheckSquare />
              </i>{" "}
              5 star accommodations
            </p>
            <p className="flex justify-start items-center mb-4">
              <i className="m-2">
                <FiCheckSquare />
              </i>
              Special gifts & offers for you
            </p>
          </div>
        </div>
      </div>
      <Services title={title} summary={Summary} />
    </>
  );
}

export default About;
