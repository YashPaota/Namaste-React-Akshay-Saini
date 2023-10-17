import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";
import { Link } from "react-router-dom";


const Body = () => {
const[listOfRestaurants , setListOfRestaurants] = useState([]); //Never Modifying the original list of restaurants
const[searchText , setSearchText] = useState("");
const[filteredRestaurant , setFilteredRestaurant] = useState([]); //Created a new variable for filtered list insted of modifying the original.
console.log("Body rendered");

useEffect(() => {
      fetchData();
          } , []);

const fetchData = async() => {
   //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const data =    await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const json = await data.json();
   //   console.log(json);
     //optional chaining
     setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
           <div className="search">
             <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
             <button 
                  onClick={() => { 
                    console.log(searchText);
                    const filteredRestaurants =  listOfRestaurants.filter(
                     (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                              
                    );
                    console.log(filteredRestaurants);
                    setFilteredRestaurant(filteredRestaurants);


                  }}>Search</button>
           </div>
              <button 
                className="filter-btn" 
                onClick={() =>{
                   const filteredList = listOfRestaurants.filter(
                             (res) => res.info.avgRating > 4.2
                             );
                      setFilteredRestaurant(filteredList)
                      }}>
                   Top Rated Restaurants
                </button>
           </div>
           <div className="res-container">
           {/* Key should be given to the parent element */}
              
              {
              filteredRestaurant.map((restaurant) => 
                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >  
                  <RestaurantCard  resData = {restaurant} />
               </Link>)
              }
              
              
           </div>
        </div>
    )
}

export default Body;