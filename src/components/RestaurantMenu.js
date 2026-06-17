import {useState} from "react";
import {useParams} from "react-router";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import MenuCard from "../components/MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import SwiggyMenuCard from "./SwiggyMenuCard";
const RestaurantMenu = () => {
    const {id, lat, lng} = useParams();
    const {restaurantData, groupedCards, itemCategory, nestedItemCategory} = useRestaurantMenu(id, lat, lng);
    return (
        <div className="res-menu m-2 text-center">
            <RestaurantInfoCard resData={restaurantData}/>
            <h2 className="text-4xl my-2">Menu</h2>
            <SwiggyMenuCard itemCategory={itemCategory} nestedItemCategory={nestedItemCategory}/>
            {/* <MenuCard key={groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title} groupedCards={groupedCards}/> */}
        </div>
    );
}
export default RestaurantMenu;