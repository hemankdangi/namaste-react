import { useState } from "react";
import { CDN_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

const dispatch = useDispatch()

const handleAddItems = (items) => {
  dispatch(addItem(items))
}
  return (
    <div>
      {items.map((items) => (
        <div key={items.card.info.id}>
          <div className="flex m-auto  p-4 justify-between text-left border-b-2 border-gray-300">
            <div className="p-2">
              <span>{items.card.info.name}- </span>
              <span> ₹{items?.card?.info?.price ? items?.card?.info?.price / 100 : items?.card?.info?.defaultPrice/100}</span>
              <p className=" text-xs">{items.card.info.description}</p>
            </div>
            <div className="flex w-4/12">
              <button className="absolute  bg-orange-200 p-2 m-2 rounded-lg" onClick={() => handleAddItems(items)}>
                Add +
              </button>
              <img src={CDN_URL + items.card.info.imageId} className="w-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
