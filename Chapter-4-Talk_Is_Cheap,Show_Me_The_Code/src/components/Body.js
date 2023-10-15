import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";


const Body = () => {
const[listOfRestaurants , setListOfRestaurants] = useState([]);
useEffect(() => {
      fetchData();
          } , []);

const fetchData = async() => {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const json = await data.json();
     console.log(json);
     //optional chaining
     setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}          
   //Conditional rendering
   // if(listOfRestaurants.length === 0)
   // {
      
   //    return <Shimmer />
   // }

   //using ternary operator
   return listOfRestaurants.length === 0 ? <Shimmer /> : (
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