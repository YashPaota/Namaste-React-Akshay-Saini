import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //Never Modifying the original list of restaurants
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //Created a new variable for filtered list insted of modifying the original.
//   console.log("Body rendered", listOfRestaurants);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
   //  console.log(json);

    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  //Conditional rendering
  // if(listOfRestaurants.length === 0)
  // {

  //    return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks Like you are offline!!! Please Check your Internet Connection..
      </h1>
    );

  //using ternary operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="m-4 p-4">
          <input
            type="text"
            placeholder="Enter Restaurant"
            className="border border-r-2 border-solid border-black outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-orange-600 hover:bg-orange-700 focus:ring-4 font-medium px-8 m-4 py-2 rounded-lg text-white shadow-2xl "
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestaurants);
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium focus:ring-4 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* Key should be given to the parent element */}

        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
          {/* If the restaurant is promoted Then add a promoted label to it. */}
          {restaurant.info.avgRating >= 4.5 ? <RestaurantCardPromoted resData={restaurant} /> :  <RestaurantCard resData={restaurant} /> } 
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
