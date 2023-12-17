import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div
      className="m-4 min-h-[320px] w-[250px] shadow-lg hover:shadow-2xl rounded-lg bg-gray-100 hover:bg-gray-200" /*style={{backgroundColor:"#f0f0f0"}}*/
    >
      <img
        alt="Image"
        src={CDN_URL + cloudinaryImageId}
        className="w-full h-52 rounded-lg object-cover "
      />
      <h3 className="font-medium text-base mx-2">{name}</h3>
      <h4 className="overflow-clip text-xs text-gray-light mt-2 mx-2">
        {cuisines.join(",")}
      </h4>
      <div className="flex justify-between text-sm mx-2">
        <div>{avgRating} Stars</div>
        <div>{costForTwo}</div>
        <div>{sla.deliveryTime} Minutes</div>
      </div>
    </div>
  );
};

// Higher Order Component
// Input Will be RestaurantComponent output will be enhanced verison of this.
// Input RestaurantCard ====>> OutPut RestaurantCardPromoted.

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white  p-0.5 mx-7 font-extralight rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
