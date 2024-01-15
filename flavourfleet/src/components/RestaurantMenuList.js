import React, { useState, useEffect } from "react";
import RestaurantCardLayout from "./RestaurantCardLayout";

import { SWIGGY_API } from "../utils/Constants";

const RestaurantMenuList = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  console.log("Initial Return");
  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setRestaurantData(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };
    console.log("Inside UseEffect");
    fetchRestaurantData();
  }, []);

  console.log("Before Return");
  return (
    <div className="flex mt-[50px] ml-[15px] justify-center flex-wrap">
      {restaurantData.map((resData) => (
        <RestaurantCardLayout resData={resData} key={resData.info.id} />
      ))}
    </div>
  );
};

export default RestaurantMenuList;
