import React, { useContext} from "react";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";

function FoodDisplay({selectedCategory}) {
  const { foodList } = useContext(StoreContext);
  

  const filteredFoodList = selectedCategory === "All"
    ? foodList
    : foodList.filter(item => item.category === selectedCategory);

  return (
    <>
      <div className="h-auto w-[100vw] mt-[2rem] bg-slate-100 ">
        <div className="absolute bottom-0 right-[5vw] sticky-cart-button ">
         <Link to='/cart'><button>Add to cart</button></Link> 
        </div>
       
        <div className="flex justify-center items-center gap-4 p-4">
          <div className="foodDisplay" id="foodDisplay">
            {filteredFoodList.map((item, index) => (
              <div
                key={index}
                className="displayFoodContainer"
                id="displayFoodContainer"
              >
                <FoodItem
                  id={item.id}
                  name={item.name}
                  price= {item.price}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodDisplay;