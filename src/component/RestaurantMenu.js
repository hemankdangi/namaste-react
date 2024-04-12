import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/contants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState();
  const [resMenu, setResMenu] = useState([]);
  const [showIndex, setshowIndex] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };
  const categories = resMenu;
  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  return (
    <div className="text-center">
      <h2 className="font-bold py-7 text-3xl uppercase">{name}</h2>
      <p>
        {cuisines?.join(", ")} <br></br> {costForTwoMessage}
      </p>
      <div className="">
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category.card.card}
            showItems={index == showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
