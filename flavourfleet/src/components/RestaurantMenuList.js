import React from "react";
import RestaurantCardLayout from "./RestaurantCardLayout";
import KFC from "../Assets/kfc.png";
import Behrouz from "../Assets/Behrouz.png";
import Dominoz from "../Assets/Dominoz.png";
import BiryaniByKillo from "../Assets/BiryaniByKillo.png";
import GoodBowl from "../Assets/GoodBowl.png";
import CostCoffe from "../Assets/costacoffe.png";
const RestaurantMenuList = () => {
  return (
    <div className="flex mt-[50px] ml-[15px] justify-center flex-wrap">
      <RestaurantCardLayout
        resName="KFC"
        rating="4.3"
        deliveryTime="30-35"
        cusine="Burger, Biryani, American, Snacks"
        imgURL={KFC}
      />
      <RestaurantCardLayout
        resName="Burger King"
        rating="4"
        deliveryTime="20-35"
        cusine="Burger,Shakes, American, Snacks"
        imgURL={KFC}
      />
      <RestaurantCardLayout
        resName="Dominoz"
        rating="4.7"
        deliveryTime="10-25"
        cusine="Zingy Parcel, Pizza, Garlic Bread, Snacks"
        imgURL={Dominoz}
      />
      <RestaurantCardLayout
        resName="Costa Cafe"
        rating="3.9"
        deliveryTime="30-35"
        cusine="Hot Coffee, Cold Cofee, American, Snacks"
        imgURL={CostCoffe}
      />
      <RestaurantCardLayout
        resName="Star Bucks"
        rating="4.9"
        deliveryTime="40-45"
        cusine="Hot Coffee, Cold Cofee, American, Snacks"
        imgURL={CostCoffe}
      />
      <RestaurantCardLayout
        resName="Biryani By killo"
        rating="4.3"
        deliveryTime="50-65"
        cusine=" Biryani, Mutton"
        imgURL={BiryaniByKillo}
      />
      <RestaurantCardLayout
        resName="Behrouz"
        rating="4.9"
        deliveryTime="20-35"
        cusine=" Biryani, Mutton"
        imgURL={Behrouz}
      />
      <RestaurantCardLayout
        resName="The Good Bowl"
        rating="4.8"
        deliveryTime="30-35"
        cusine="Rajma Rice, Biryani, Dal Tadka, Dal Makhni"
        imgURL={GoodBowl}
      />
    </div>
  );
};

export default RestaurantMenuList;
