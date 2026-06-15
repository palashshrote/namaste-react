import {useState,useEffect} from "react";
import {restaurantMenuApi} from "../utils/constants";

const useRestaurantMenu = (id)=> {
    const [restaurantData, setRestaurantData] = useState({});
    const [groupedCards, setGroupedCards] = useState({});
    useEffect(()=>{
        fetchMenu();
    },[]);
    async function fetchMenu() {
        try {
            const response = await fetch(restaurantMenuApi + id);
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const restaurantData = data?.data?.cards[2]?.card?.card?.info;
            const groupedCards = data?.data?.cards[4];
            setRestaurantData(restaurantData);
            setGroupedCards(groupedCards);
            console.log('restaurantData',restaurantData);
            console.log('groupedCards',groupedCards);
        } catch (error) {
            console.log(error);
        }

    }
    return {restaurantData, groupedCards};
}
export default useRestaurantMenu;