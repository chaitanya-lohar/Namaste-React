import RestaurantCart from "./RestaurantCart";
import { restObj } from "../utils/constant";
import { useState, useEffect } from "react";

const Body = () => {
  // State Variable  - Super powerful variable
  const arr = useState(restObj);
  const [listOfRestaurants, setListOfRestaurants] = arr;

  //normal js variable
  // let listOfRestaurants = restObj;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((rest) => {
              return rest.avgRating > 4;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restContainer">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCart key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
