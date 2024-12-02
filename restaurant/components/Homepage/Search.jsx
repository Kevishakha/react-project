import { React, useState } from "react";
import { images } from "../../assets/assests";
import "./FoodCategory.css";
import image from "../../assets/Image/menubg.webp";
import { foodList } from "../../assets/assests";
import { useNavigate } from "react-router";
 import { FaMagnifyingGlass } from "react-icons/fa6";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchTerm = search.toLowerCase();

    const matchedfood = foodList.find((food) => {
      return (
        food.name.toLowerCase().includes(searchTerm) ||
        food.category.toLowerCase().includes(searchTerm)
      );
    });
    if(search===''){
      alert("Search something")
    }
    else{ if(matchedfood) {
      console.log("matched");
      console.log(searchTerm);
      navigate(`/menu/${matchedfood.id}`);
    } else {
      alert('Food not found')
    } 
  }
    
  };

  return (
    <>
      <div
        className="md:h-[75vh] max-w-[100vw] xs:h-[70vh] m-auto  flex flex-col items-center justify-center gap-4 pageimg  "
        style={{
          backgroundImage: `url(${images.bgimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white font-extrabold italic xs:text-6xl md:text-8xl   ">
          Tomato
        </h1>
        <p className=" text-white italic font-bold xs:text-3xl text-center md:text-5xl ">
          "Order your favourite food , Here"
        </p>
        <div className="bg-inherit  search-bar relative  ">
          <input
            className="bg-inherit  h-full w-full p-2  "
            placeholder="Search your favorite dish"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        
        <button
          className="bg-inherit  text-white font-bold  xs:text-2xl md text-left absolute right-0 top-0 z-50 "
          onClick={handleSearch}
        >
          🔍 
        </button>
        </div>
      </div>
    </>
  );
}

export default Search;
