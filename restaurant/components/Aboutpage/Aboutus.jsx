import React from "react";
import TeamImage from "./TeamImage";

const Aboutus = () => {
  return (
  <div className="about-us">
 <section className="team-section w-[100vw] mx-auto mb-6">
  <div className="mb-8 w-full mx-auto  tracking-wide flip-Animate ">
  <h2 className="text-center lg:p-6 md:p-4 sm:p-2 xs:p-1 lg:text-5xl xs:text-2xl sm:text-3xl md:text-4xl lg:mb-7 md:mb-5 sm:mb-3 xs:mb-1    font-extrabold bg-slate-100 rounded-lg text-shadow-glow">
    Meet Our Team
  </h2>
    <p className="   w-[60vw] md:text-[20px] lg:text-xl xs:text-xs  sm:text-[16px] text-gray-700 text-center leading-relaxed text-shadow-bold italic m-auto " >
    Our mission is simple: to provide an unforgettable dining experience through exceptional food, friendly service,
     and a welcoming atmosphere.<br/> We are passionate about offering you the best dining experience possible. 
     Founded in [Year],<br/> we’ve been serving up delicious food in the heart of our Customers.
    </p>
  </div>
  <TeamImage />
</section>
    </div>
  );
};

export default Aboutus;
