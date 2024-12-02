import React, { createContext, useEffect, useState } from "react";
import { foodList } from "../../assets/assests";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [favItems, setFavItems] = useState([]);
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev,[itemId]:1 }));
    } else {
      setCartItems((prev) => ({ ...prev,[itemId]:prev[itemId] +1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev,[itemId]: prev[itemId] - 1 }));
  };
  
  const addToFavorite=(itemId)=>{
    setFavItems((prev)=>{
     if(!prev.includes(itemId)){
      return [...prev,itemId];
     }
     else{
      return [prev]
     }
    })
  }
 const removeFromFavorite=(itemId)=>{
  setFavItems((prev) => prev.filter((id) => id !== itemId));
  }
 


  useEffect( ()=>{
    console.log(cartItems)
    console.log(favItems)
  },[cartItems,favItems])



  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    addToFavorite,
    favItems,
    setFavItems,
    removeFromFavorite,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
