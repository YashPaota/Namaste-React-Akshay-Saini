import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const param = useParams();
    const{resId} = param;
    const resInfo = useRestaurantMenu(resId);
    const [showIndex , setShowIndex] =useState(null);
    // console.log(param);

    // console.log("Rendered");

    

    if(resInfo === null) return <Shimmer />;

    const {name , cuisines , costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

     const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     ); 

    //  console.log(categories);
    
    return  (
        <div className="text-center">
            <h1 className="my-6 font-bold text-3xl font-serif">{name}</h1>
            <h4 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h4>

            {categories.map((category , index) => (
                  <RestaurantCategory 
                    key={category.card.card.title} 
                    data={category?.card?.card} 
                    showItems = {index === showIndex ? true : false}
                    setShowIndex = {() => setShowIndex(index)}    
                    />


            ))}
            
            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}  -  Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li> )}
                <li>{itemCards[0].card.info.name}</li>
                <li>Biryani</li>
                <li>Diet Coke</li>
            </ul> */}
        </div>
    );
};

export default RestaurantMenu;