import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "./About.css"

function TestimonialSection() {
  const [ slidesToShow,setSlidesToShow]=useState(3)

  useEffect(()=>{
  const updateslidesToShow=()=>{
    if(window.innerWidth<650){
      setSlidesToShow(1)
  }else if(window.innerWidth<950){
      setSlidesToShow(2)
  }else{
    setSlidesToShow(3)
  }}
  updateslidesToShow()
  window.addEventListener('resize',updateslidesToShow)
  return ()=>{
    window.removeEventListener('resize',updateslidesToShow)
  }
  },[])




    const testimonials = [
        {
          name: "Emily White",
          text: "The food was absolutely delicious! The atmosphere was so welcoming. Highly recommend.",
        },
        {
          name: "Chris Brown",
          text: "An amazing experience from start to finish. The staff was incredibly friendly!",
        },
        {
          name: "Sophia Miller",
          text: "Great place for a family dinner. The dishes were exquisite and the service was top-notch.",
        },
        {
          name: "Emily White",
          text: "The food was absolutely delicious! The atmosphere was so welcoming. Highly recommend.",
        },
        {
          name: "Chris Brown",
          text: "An amazing experience from start to finish. The staff was incredibly friendly!",
        },
        {
          name: "Sophia Miller",
          text: "Great place for a family dinner. The dishes were exquisite and the service was top-notch.",
        },
        {
          name: "Emily White",
          text: "The food was absolutely delicious! The atmosphere was so welcoming. Highly recommend.",
        },
        {
          name: "Chris Brown",
          text: "An amazing experience from start to finish. The staff was incredibly friendly!",
        },
        {
          name: "Sophia Miller",
          text: "Great place for a family dinner. The dishes were exquisite and the service was top-notch.",
        },
      ];
      
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
    




  return (
    <>
    <section className="testimonial-section flip-Animate ">
        <h2 className="text-center md:text-5xl font-bold xs:text-2xl sm:text-3.5xl " >What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial p-8 ">
              <p className='xs:text-center md:text-justify'>"{testimonial.text}"</p>
              <h4 className='xs:text-center md:text-justify'> {testimonial.name}</h4>
            </div>
          ))}
        </Slider>
      </section>
    
    </>
  )
}

export default TestimonialSection