import React from "react";
import { StoreContext } from "../Components/Context/StoreContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Cart() {
  
  const { cartItems, foodList } = useContext(StoreContext);

  const subtotal = foodList.reduce((acc, item) => {
    const quantity = Number(cartItems[item.id] || 0); 
    let price = Number(item.price);
  
    return acc += quantity * price;
  }, 0);
  
  const isCartEmpty = !foodList.some((item) => cartItems[item.id] > 0);
  

  return (
    <>
    <div className="bg-[#f0e1c6]   h-full py-[15vh]  ">
      <div className="Cart  px-6 text-center  ">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>
         
         {!isCartEmpty?(
<>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-gray-300 px-4 py-2 text-center ">Item</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Quantity</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {foodList.map((item, index) => {
              if (cartItems[item.id] > 0) {
                return (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="  rounded-md w-40 h-20"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                    <td className="border border-gray-300 px-4 py-2">${item.price}</td>
                    <td className="border border-gray-300 px-4 py-2">{cartItems[item.id]}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      ${Number(cartItems[item.id]) * Number(item.price)}
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>

        <div className="text-center mt-4 text-lg font-bold">
          Subtotal: <span className="text-blue-600">${subtotal.toFixed(2)}</span>
        </div>
        </>
): <>
  <div className="h-[30vh] w-full flex flex-col justify-start items-center  " >
    <h2 className=" text-black font-bold text-3xl ">There is no item in the cart</h2>
    <p className=" text-[red] font-bold text-3xl  ">Please order your favorite food </p>
    <p><Link to='/menu' className=" text-[orangered] font-bold text-3xl  ">Click Here</Link></p>
  </div>
</>

}


      </div>
      </div>
    </>
  );
}

export default Cart;