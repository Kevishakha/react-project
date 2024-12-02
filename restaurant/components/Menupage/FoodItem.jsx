import React, { useState, useContext } from "react";
import "./Menu.css";
import { Icon } from "../../assets/assests";
import { StoreContext } from "../Context/StoreContext.jsx";

import { IoIosHeart } from "react-icons/io";

function FoodItem({ id, name, image, price, description, category }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const {addToFavorite,removeFromFavorite,favItems} = useContext(StoreContext);
  
  const isFavorite =favItems.includes(id);
  const toggleFavorite=()=>{
    if(isFavorite){
      removeFromFavorite(id)
    }
    else{
      addToFavorite(id)
    }
  }

  return (
    <>
      <div className="foodItem flip-Animate  " key={id}>
        <div className="foodItem-image  ">
          <img src={image} alt={name} />
          <div className="count-item z-50 ">
            {!cartItems[id] ? (
              <div onClick={() => addToCart(id)} className="">
                {" "}
                {Icon.addiconWhite}{" "}
              </div>
            ) : (
              <div className="count-set">
                <div onClick={() => removeFromCart(id)} className="bg-red-400 ">
                  {Icon.removeiconRed}{" "}
                </div>
                <p>{cartItems[id]} </p>
                <div onClick={() => addToCart(id)} className=" bg-green-400 ">
                  {Icon.addiconGreen}
                </div>
              </div>
            )}
          </div>
          <div className="heart-icon absolute bottom-0 right-0 w-full h-7 bg-black opacity-60 z-40 flex items-center p-1 ">
          <div
  onClick={toggleFavorite}
  style={{
    height:'24px',
    width:'24px',
    display: "flex",
    justifyContent:'center',
    alignItems:'center',
    border: "2px solid red",
    borderRadius: "50%",
    padding: "5px",
    textAlign: "center",
    color: isFavorite ? "red" : "white",
    backgroundColor: isFavorite ? "white" : "red",
  }}
><i className="text-xs rounded-full" >
  {isFavorite ? "💖" : "🤍"}
  </i>
</div>
          </div>
        </div>

        <h3 className="foodItem-title">{name}</h3>
        <p className="text-[20px] "> Price: $ {price}</p>
        <p className="text-[16px] "> {description}</p>
      </div>
    </>
  );
}

export default FoodItem;
