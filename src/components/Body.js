import RestaurantCart from "./RestaurantCart";
import { restObj, CDN_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable  - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CDN_URL);
    const json = await data.json();

    const rest = json?.data?.cards;
    let result;
    rest.forEach((element) => {
      if (element?.card?.card?.id === "restaurant_grid_listing") {
        result = element?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(result);
      }
    });
  };

  if (listOfRestaurants.length === 0) {
    const components = [];
    for (let i = 0; i < 10; i++) {
      components.push(<Shimmer />);
    }
    return <div className="shimmer-container">{components}</div>;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((rest) => {
              return rest.info.avgRating > 4;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restContainer">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCart
            key={restaurant?.info?.id}
            restData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
