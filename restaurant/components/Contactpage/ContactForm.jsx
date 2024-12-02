import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import "./Contact.css";

const ContactForm =()=> {



  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
      <div className="contactHeader w-screen md:mt-[5vh] sm:mt-[2vh] bg-slate-100  p-2 mb-[4vh]">
        <h1 className="bold  text-black md:text-3xl  xs:text-xl  text-center  font-semibold  ">
          Have Any Question?
        </h1>
      </div>
      <div className="contactFormDiv w-screen flex justify-center md:h-[50vh] sm:h-[60vh] xs:h-[70vh] ">
      <Form  method='Post' action="/contact"
       className=" flex flex-col justify-center w-[60vw] gap-4  ">
        <div className="grid md:grid-cols-2 gap-4 w-full md:sm:grid-cols-1  ">
          <input
            type="text"
            placeholder="First Name"
            className="  h-10 contactFormInput ring-1 ring-slate-200"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="  h-10 contactFormInput ring-1 ring-slate-200"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div >
        <div className='w-full ring-1 ring-slate-200'>
        <input
          type="email"
          placeholder="Email Address"
          className=" h-10 contactFormInput "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='w-full '>
        <textarea
          className=" h-18 contactFormInput ring-1 ring-slate-200 "
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        </div>
       
          <button 
          type="submit"
          className=
          "  bg-black text-white rounded-full sm:py-2 xs:p-0 sm:px-8 Contactbtn m-auto hover:bg-white hover:text-black border-2 border-black text-center mt-[2vh]">
            Send Message
          </button>
        
      </Form>
      </div>
    </>
  );
}
export default ContactForm;



export const getFormData = async ({ request }) => {
  try {
      const formData = await request.formData(); 
      
      const data = Object.fromEntries(formData);
      console.log(data)
      return null;
  } catch (error) {
      console.error("Error processing form data:", error);
  }
};








