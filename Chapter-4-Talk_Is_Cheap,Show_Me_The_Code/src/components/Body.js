import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {
const[listOfRestaurants , setListOfRestaurants] = useState(resList); 
console.log(listOfRestaurants)  // Super Powerful 

    return(
        <div className="body">
           <div className="filter">
              <button 
                className="filter-btn" 
                onClick={() =>{
                   const filteredList = listOfRestaurants.filter(
                             (res) => res.info.avgRating > 4.2
                             );
                      setListOfRestaurants(filteredList)
                      }}>
                   Top Rated Restaurants
                </button>
           </div>
           <div className="res-container">
              
              {
              listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id}resData = {restaurant} />)
              }
              
              
           </div>
        </div>
    )
}

export default Body;