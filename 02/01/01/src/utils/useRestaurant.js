import { useState,useEffect } from "react";
import restaurantList from "../Components/Config";
const useRestaurant = (id) =>{
        const [restaurant, setRestaurant] = useState(null);

        useEffect(() => {
            getRestaurantInfo();
        }, []);
    
        function getRestaurantInfo() {
            const foundRestaurant = restaurantList.find((restaurant) => restaurant.data.id === id);
            setRestaurant(foundRestaurant.data);
        }

        return restaurant;
}

export default useRestaurant;