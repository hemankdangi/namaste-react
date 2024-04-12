import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BODY_URL } from "../utils/contants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setSearchText] = useState();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(BODY_URL);
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter m-4 p-4 ">
        <input
          className=" p-2 border border-solid border-gray-700 w-1/4 rounded-l-md"
          type="text"
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search bg-orange-100 p-2 border border-solid border-gray-700 rounded-r-md"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((restaurants) =>
              restaurants?.info?.name
                .toLowerCase()
                .includes(searchtext.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter p-2 mx-6 bg-orange-100 border border-solid border-gray-700 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restaurants) => restaurants?.info?.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurants) => (
          <Link
            key={restaurants?.info?.id}
            to={"/restaurant/" + restaurants?.info?.id}
          >
            {restaurants?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurants} />
            ) : (
              <RestaurantCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
