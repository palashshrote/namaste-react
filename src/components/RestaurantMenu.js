import {useState} from "react";
import {useParams} from "react-router";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import MenuCard from "../components/MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const {id} = useParams();
    const {restaurantData, groupedCards} = useRestaurantMenu(id);
    
    
    return (
        <div className="res-menu m-2">
            <RestaurantInfoCard resData={restaurantData}/>
            <h2 className="text-4xl my-2">Menu</h2>
            <MenuCard key={groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title} groupedCards={groupedCards}/>
        </div>
    );
}
export default RestaurantMenu;