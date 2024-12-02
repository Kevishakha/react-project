import React from 'react';
import "./Contact.css"

function ContactSection() {
  return (
    <div className="w-[100vw] bg-white p-8  rounded-lg shadow-md flex flex-col lg:flex-row gap-12 ">
       <div className='flex justify-between w-full xs:flex-col md:flex-row  ' > 

      <div className="md:w-1/2 xs:w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-gray-700">
            123 Delicious Lane, Foodie Town, Yummy State, 45678
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-700">
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              +91 1234567899, +91 1234567899,
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-700">
            <a href="mailto:info@restaurant.com" className="text-blue-500 hover:underline">
              info@restaurant.com,<br/> info@restaurant.com,
            </a>
          </p>
        </div>
      </div>

      <div className="md:w-1/2 xs:w-full">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.95373631550465!3d-37.81627974201198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1dfbf%3A0xe18e6f92bb2cc1aa!2s123%20Delicious%20Lane%2C%20Melbourne%20VIC%203001%2C%20Australia!5e0!3m2!1sen!2sus!4v1637763871567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      </div>
    </div>
  );
}

export default  ContactSection;