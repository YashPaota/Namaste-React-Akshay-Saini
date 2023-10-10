import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const { resData} = props;
    const{name , cuisines , avgRating , sla , cloudinaryImageId} = resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img 
          alt="res logo"
          src={CDN_URL + cloudinaryImageId}
          className="res-logo" 
         />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;