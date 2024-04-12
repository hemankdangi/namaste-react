import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className=" m-2 p-4 bg-orange-100 w-64 rounded ">
      <img
        className=" rounded-lg"
        alt="logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 uppercase">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}star</h4>
      <h4>{deliveryTime}minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
