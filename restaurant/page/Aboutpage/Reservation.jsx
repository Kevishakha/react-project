import React, { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    specialRequest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Submitted:", formData);
    alert("Reservation submitted successfully!");
  
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
      specialRequest: "",
    });
  };

  return (
    <><div className="h-full bg-[#f0e1c6] py-[20vh] ">
    <div className="Reservation  px-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Make a Reservation</h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

      
        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-left text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="date" className="block text-left text-gray-700 mb-2">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="time" className="block text-left text-gray-700 mb-2">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

    
        <div className="mb-4">
          <label htmlFor="guests" className="block text-left text-gray-700 mb-2">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

       
        <div className="mb-4">
          <label htmlFor="specialRequest" className="block text-left text-gray-700 mb-2">Special Requests</label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit Reservation
        </button>
      </form>
    </div>
    </div>
    </>
    
  );
}

export default Reservation;