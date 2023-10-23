import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const param = useParams();
    const{resId} = param;
    const resInfo = useRestaurantMenu(resId);
    // console.log(param);

    // console.log("Rendered");

    

    if(resInfo === null) return <Shimmer />;

    const {name , cuisines , costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);
    
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}  -  Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li> )}
                {/* <li>{itemCards[0].card.info.name}</li> */}
                {/* <li>Biryani</li>
                <li>Diet Coke</li> */}
            </ul>
        </div>
    );
};

export default RestaurantMenu;