import React from "react";
import { images } from "../../assets/assests";
function Page() {
  return (
    <>
      <div
        className="relative h-[100vh] w-screen m-auto flex flex-col items-center justify-center mt-2"
        style={{
          backgroundImage: `url(${images.Dining})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "90vh",
          width: "80vw",
        }}
      >
        <div className="w-3/4">
          <h1 className="text-white text-5xl font-extrabold italic text-center">Tomato</h1>
          <p className="text-2xl text-white italic font-bold ">
            Welcome to [Restaurant Name], where culinary excellence meets
            comfort and tradition. Established in [Year], our family-owned
            restaurant brings together the finest ingredients and authentic
            recipes to create a dining experience that feels like home. <br/>our
            mission is simple: to provide an unforgettable dining experience
            through exceptional food, friendly service, and a welcoming
            atmosphere. Whether you’re here for a casual meal with friends or
            celebrating a special occasion, we strive to make every visit
            memorable.
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
