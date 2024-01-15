import React from "react";
import { CDN_URL } from "../utils/Constants";

const RestaurantCardLayout = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="relative border-solid border-2 w-[300px] h-[350px] p-[22px] mr-[25px] mt-[12px] shadow-md transition-transform transform hover:scale-95 cursor-pointer z-10 hover:z-20 ">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Name"
        className="h-[150px] w-[250px] "
      />
      <div className="mt-[12px]">
        <h2>{name}</h2>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        <h4>⭐️ {avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCardLayout;
