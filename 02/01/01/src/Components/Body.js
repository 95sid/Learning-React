import restaurantList from "./Config";
import RestaurantCard from "./RestrauntCard";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/utils";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

// body with cards
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState(restaurantList);
  const [allrestaurants, setAllRestaurants] = useState(restaurantList);
  const { user, setuser } = useContext(UserContext);

  const isOnline = useOnline();
  if (!isOnline)
    return <h1>❌ You are Offline !! Check your internet Connection </h1>;

  return (
    <>
      <div className="search-container m-5">
        <input
          type="text"
          placeholder="search"
          className=" bg-red-50 m-2 p-4 rounded-lg focus:bg-red-200"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="bg-green-300 p-4 font-bold rounded-lg hover:bg-green-500 hover:text-white "
          onClick={() => {
            // Filter data
            const data = filterData(searchInput, allrestaurants);
            // Update data
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input
          value={user.name}
          onChange={(e) =>
            setuser({
              name: e.target.value,
              email: "newemail@gmail.com",
            })
          }
        ></input> */}
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
