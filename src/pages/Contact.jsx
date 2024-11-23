import React from 'react';
import PageImage from '../components/PageImage';
import images from '../assets/studentTourim.webp';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';

const contactdiv = [
  {
    id: 1,
    icon: <FaPhoneSquareAlt />,
    title: 'Make a Call',
    text1: '+918506922177',
    text2: '+918506944177',
  },
  {
    id: 2,
    icon: <IoMdMail />,
    title: 'Send A Mail',
    text1: 'jingleholidaybazaar@gmail.com',
    text2: 'thejingleholidaybazaar@gmail.com',
  },
  {
    id: 3,
    icon: <MdLocationOn />,
    title: 'Find Us',
    text1: '3C, A1 Sector 10, Noida',
    text2: 'Uttar Pradesh, India',
  },
];

function Contact() {
  return (
    <>
      <PageImage Page={'Contact US'} pagePath={'/contact'} images={images} PageHead={'Contact US'}/>
      <div className='max-w-[100vw] h-full p-10'>
      <div className='max-w-[70vw] h-auto grid grid-cols-3 px-5 gap-5 justify-center m-auto contactMainDiv'>
        {contactdiv.map((item) => {
          return (
            <div key={item.id} className='flex flex-col items-center  p-4 contactdiv gap-2  mb-12 hover:ring-1 hover:ring-black  '>
              <i>{item.icon}</i>
              <h1 className='text-3xl font-semibold'>{item.title}</h1>
              <p className='mb-4 text-center '>
                {item.text1}<br />{item.text2}
              </p>
            </div>
          );
        })}
      </div>
      </div>
      
      <div className='bold flex justify-center text-black text-3xl bg-slate-100 p-8 font-semibold my-6'>
        Have Any Question?
      </div>

      <div className="h-full w-full p-2 pb-12">
        <form className="w-3/4 h-full m-auto flex flex-col gap-4 items-center">
          <div className='flex flex-row gap-8 w-full'>
            <input type="text" placeholder="First Name" className="w-1/2 h-10 contactFormInput ring-1 ring-slate-200" />
            <input type="text" placeholder="Last Name" className="w-1/2 h-10 contactFormInput ring-1 ring-slate-200  " />
          </div>
          <input type="text" placeholder="Email Address" className="w-full h-10 contactFormInput ring-1 ring-slate-200  " />
          <textarea className='w-full h-28 contactFormInput ring-1 ring-slate-200 ' placeholder='Comment'  />
          <Link to='/contact'>
            <button 
              className='bg-black text-white rounded-full py-2 px-8 Contactbtn m-auto hover:bg-white hover:text-black border-2 border-black text-center'>
              Send Message
            </button>
          </Link> 
        </form>
      </div>
    </>
  );
}

export default Contact;