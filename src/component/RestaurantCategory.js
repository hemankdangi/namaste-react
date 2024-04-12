import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems ,setshowIndex  }) => {
  const handleClick = () => { setshowIndex (showItems)};
  return (
    <div className="w-6/12 m-auto bg-orange-100 p-4 border-b-2 border-gray-400 shadow-lg">
      <div
        className=" px-4 mx-4 p-4 flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="font-bold text-xl">+</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
