import { useParams } from "react-router-dom";
import { CLOUDINARY__IMAGE_PREFIX } from "../Commons/constant";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem,removeItem,clearItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const dispatch = useDispatch();
    const handleItem = ()=>{
        dispatch(addItem("apple"))
    }
    const removeItems =()=>{
        dispatch(removeItem());
    }
    const clearItems = ()=>{
        dispatch(clearItem());
    }
    const params = useParams();
    const { id } = params;
    
    const restaurant = useRestaurant(id);
    if(!restaurant) return null;
    return (
        <div className="menu" >
            <h1 className="w-40 p-2 m-2 bg-gray-600 font-bold text-white">{restaurant.name}</h1>
            <h2 className="w-40 p-2 m-2 bg-gray-600 font-bold text-white">Restaurant Id : {id}</h2>
            <img className="w-40 h-40 p-2 m-2 bg-gray-600" src={CLOUDINARY__IMAGE_PREFIX + restaurant.cloudinaryImageId} alt="Restaurant" />
            <button className="p-2 m-2 bg-violet-200 hover:bg-violet-400 font-bold border-2 border-violet-400" onClick={()=>handleItem()}>Add Item</button>
            <button className="p-2 m-2 bg-violet-200 hover:bg-violet-400 font-bold border-2 border-violet-400" onClick={()=>removeItems()}>Remove Item</button>
            <button className="p-2 m-2 bg-violet-200 hover:bg-violet-400 font-bold border-2 border-violet-400" onClick={()=>clearItems()}>Clear Item</button>
        </div>
    );
}   

export default RestaurantMenu;
