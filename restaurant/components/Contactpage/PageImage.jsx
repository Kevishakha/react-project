import React from 'react';
import { images } from '../../assets/assests';

function PageImage() {
  
  return (
    <>
    <div  className="contact-image   md:h-[75vh] xs:h-[50vh]  m-auto ">
      <div
        id='contactImage'
        className=' image-container h-full  overflow-hidden relative  pageimg '
        style={{
          backgroundImage: `url(${images.Dining})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
     <div className="absolute bottom-16 md:w-[50vw] xs:w-[70vw]   md:left-[25vw] xs:left-[12vw]  ">
          <div className=" bounce bg-black bg-opacity-70  xl:p-6 md:p-4 sm:p-3 xs:p-1  rounded-lg shadow-lg text-center text-white ">
            <h2 className="md:text-3xl  font-extrabold mb-4 xs:text-xl sm:text-2xl lg:text-4xl ">
            Have Any Question?
            </h2>
            <p className=" xs:text-xs sm:text-xl lg:text-2xl text-center   text-shadow-glow  ">
              If you have any question or need more information, please feel free to contact us.<br/>
               
              We will be happy to assist you.

            </p>
          </div>
        </div>
          
      </div>
      </div>
    </>
  );
}

export default PageImage;

