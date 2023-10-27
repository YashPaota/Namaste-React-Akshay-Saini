import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div
      className="m-4 h- w-[250px] shadow-lg hover:shadow-2xl rounded-lg bg-gray-100 hover:bg-gray-200" /*style={{backgroundColor:"#f0f0f0"}}*/
    >
      <img
        alt="Image"
        src={CDN_URL + cloudinaryImageId}
        className="rounded-lg object-fill"
      />
      <h3 className="font-medium text-base">{name}</h3>
      <h4 className="overflow-clip text-xs text-gray-light mt-2">
        {cuisines.join(",")}
      </h4>
      <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>

      
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
