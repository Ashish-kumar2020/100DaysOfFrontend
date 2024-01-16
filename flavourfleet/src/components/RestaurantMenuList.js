import React, { useState, useEffect } from "react";
import RestaurantCardLayout from "./RestaurantCardLayout";

import { SWIGGY_API } from "../utils/Constants";
import Shimmer from "./Shimmer";

const RestaurantMenuList = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);
  // Search Data
  const filterSearchData = (val) => {
    console.log(val);
    const filteredRestaurant = restaurantData.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterSearch(filteredRestaurant);
  };
  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setRestaurantData(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilterSearch(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };
    fetchRestaurantData();
  }, []);

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* search Container */}
      <div className="ml-[40%] mt-[20px]">
        <input
          className="border border-black w-[300px] mr-[32px] p-[7px] rounded-lg"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="h-[36px] w-[80px] border border-black rounded-lg"
          onClick={() => {
            filterSearchData(searchValue);
          }}
        >
          Search
        </button>
      </div>
      {/* Restaurant container */}
      <div className="flex mt-[50px] ml-[15px] justify-center flex-wrap">
        {filterSearch.map((resData) => (
          <RestaurantCardLayout resData={resData} key={resData.info.id} />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenuList;
