import React from 'react'
import Search from '../Components/HomePage/Search'
import FoodSlide from '../Components/HomePage/FoodSlide'
import Gallerycaraousel from '../Components/AboutPAge/Gallerycaraousel'
import TestimonialSection from '../Components/AboutPAge/TestimonialSection'
import Categories from '../Components/HomePage/Categories'
import Navbar from '../Components/Navbar'
function Home() {
 

  return (
   <>
   <div className='h-auto w-full '>
    
    <Search/>
      <FoodSlide />
    
     <Categories/>
    <Gallerycaraousel/> 
       
      <TestimonialSection/>
      </div>
   </>
  )
}

export default Home