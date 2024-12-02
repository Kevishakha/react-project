import React from 'react';
import './FoodCategory.css';
import {Foodcategories} from '../../assets/assests'
import {Link} from 'react-router-dom'


function Categories(){
  return (
    <>
     <div className="category-container  ">
    <h2 className='text-center font-semibold bg-slate-100 md:text-5xl md:p-4 xs:text-3xl  xs:p-1' >Our Special Menu</h2>
    <div className="category-contain max-w-[90vw] m-auto mt-4 flip-Animate  ">
      {Foodcategories.map((category, index) => (
        <Link to='/menu'>
          <div className="category " key={index} >
          
          <div className="category-images bounce  ">
            {category.images.map((image, i) => (
             
              <img src={image} alt={`Food ${i + 1}`} key={i} />
              
            ))}
          </div>
          <h3 className="category-title z-30 ">{category.title}</h3>
        </div></Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Categories;