import React from "react";

const RestaurantCardLayout = (props) => {
  const { resName, rating, deliveryTime, cusine, imgURL } = props;
  console.log(resName, rating, deliveryTime, cusine, imgURL);
  return (
    <div className="relative border-solid border-2 w-[300px] h-[350px] p-[22px] mr-[25px] mt-[12px] shadow-md transition-transform transform hover:scale-95 cursor-pointer z-10 hover:z-20 ">
      <img
        src={imgURL}
        alt="Restaurant Name"
        className="h-[150px] w-[250px] "
      />
      <div className="mt-[12px]">
        <h2>{resName}</h2>
        <h3>
          ⭐️ {rating} || {deliveryTime} min
        </h3>
        <h3>{cusine}</h3>
      </div>
    </div>
  );
};

export default RestaurantCardLayout;
