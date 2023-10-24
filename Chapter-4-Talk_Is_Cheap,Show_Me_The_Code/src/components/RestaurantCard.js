import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const { resData} = props;
    const{name , cuisines , avgRating , sla , cloudinaryImageId , costForTwo} = resData?.info;
    return(
        <div className="m-8  p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" /*style={{backgroundColor:"#f0f0f0"}}*/>
        <img 
          alt="Image"
          src={CDN_URL + cloudinaryImageId}
          className="rounded-lg" 
         />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;