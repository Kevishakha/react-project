import React from 'react'
import Exploremenu from '../Components/MenuPage/Exploremenu'
import { useState } from 'react'
import FoodDisplay from '../Components/MenuPage/FoodDisplay'
import MenupageImage from '../Components/MenuPage/MenupageImage'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <>
    <MenupageImage/>
    <Exploremenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    <FoodDisplay selectedCategory={selectedCategory} />
   
    
    </>
  )
}

export default Menu