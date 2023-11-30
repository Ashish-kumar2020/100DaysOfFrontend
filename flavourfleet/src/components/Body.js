import React, { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.595578591654718&lng=77.33441691845655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${pageNumber}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const newRestaurants =
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurants((prevRestaurants) => [
        ...prevRestaurants,
        ...newRestaurants,
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageNumber]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {restaurants.map((resName, index) => (
        <RestaurantList key={index} resName={resName} />
      ))}
    </div>
  );
};

export default Body;
