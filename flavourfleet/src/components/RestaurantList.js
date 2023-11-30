// RestaurantList.js

import React from "react";
import "../style/RestaurantList.css";

const RestaurantList = ({ resName }) => {
  // Destructure the necessary values from resName
  const { info } = resName;
  const { name, areaName, avgRating, cloudinaryImageId, cuisines, costForTwo } =
    info;
  const { sla } = info;
  console.log(resName);

  // Convert the cuisines array to a string
  const cuisinesString = cuisines.slice(0, 3).join(", ");

  return (
    <div className="resList">
      <div className="resCard">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
          className="resImage"
        />
        <div className="resDetails">
          <h3 className="resName">{name}</h3>
          <p className="resArea">{areaName}</p>
          <div className="resRatingCost">
            <span className="resRating">{avgRating}</span>
            <span className="resCost">{costForTwo}</span>
            <span className="resCost">{sla.deliveryTime} min</span>
          </div>
          <p className="resCuisines">{cuisinesString}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
