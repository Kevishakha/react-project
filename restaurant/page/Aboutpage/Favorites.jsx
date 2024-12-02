import React, { useContext } from "react";
import { StoreContext } from "../Components/Context/StoreContext";
import { Link } from "react-router-dom";

function Favorites() {
  const { favItems, foodList } = useContext(StoreContext);

  const favoriteProducts = foodList.filter((item) =>
    favItems.includes(item.id)
  );

  return (
    <div className=" bg-[#f0e1c6] h-full py-[15vh]  ">
      <div className="favorites-page ">
        <h2 className=" text-center text-[red]  text-5xl font-bold ">
          Your Favorites
        </h2>
        {favoriteProducts.length > 0 ? (
          <div className="favorites-grid flex flex-row flex-wrap gap-4 w-[80vw] m-auto mt-[5vh]    ">
            {favoriteProducts.map((product) => (
              <div
                key={product.id}
                className="favorite-item flex flex-col h-[40vh] w-[40vh] overflow-hidden rounded-[20px] p-5 bg-slate-100  "
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className=" h-full w-full object-cover bg-center bg-cover overflow-hidden rounded-[30px] "
                />
                <h3 className="text-center text-2xl text-orange-500">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="h-[30vh] w-full flex flex-col justify-start items-center mt-[5vh] ">
              <h2 className=" text-black font-bold lg:text-3xl xs:text-2xl text-center ">
                You have no favorite items.
              </h2>
              <p className=" text-[red] font-bold lg:text-3xl xs:text-2xl text-center ">
                Please Add your favorite food{" "}
              </p>
              <p>
                <Link
                  to="/menu"
                  className=" text-[orangered] font-bold text-3xl  "
                >
                  Click Here
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Favorites;
