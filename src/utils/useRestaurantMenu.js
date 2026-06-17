import {useState,useEffect} from "react";
import { swiggyRestaurantMenuApiLL } from "../utils/constants";
const useRestaurantMenu = (id, lat, lng)=> {
    const [restaurantData, setRestaurantData] = useState({});
    const [groupedCards, setGroupedCards] = useState({});
    const [itemCategory, setItemCategory] = useState([]);
    const [nestedItemCategory, setNestedItemCategory] = useState([]);
    useEffect(()=>{
        fetchMenu();
    },[]);
    async function fetchMenu() {
        try {
            // console.log(id, lat, lng);
            // const response = await fetch(swiggyRestaurantMenuApiLL);
            // const response = await fetch(swiggyRestaurantMenuApiLL(id, lat, 79.0886514));
            const response = await fetch(swiggyRestaurantMenuApiLL(id, lat, lng));
            // const response = await fetch('http://localhost:3000/api/swiggy-menu');
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // console.log(data);
            const restaurantData = data?.data?.cards[2]?.card?.card?.info;
            const groupedCards = data?.data?.cards[4];
            const itemCategoryData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menu) => menu.card.card["@type"].split('.').pop() === 'ItemCategory' )
            const nestedItemCategoryData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menu) => menu.card.card["@type"].split('.').pop() === 'NestedItemCategory' )
            setRestaurantData(restaurantData);
            setGroupedCards(groupedCards);
            setItemCategory(itemCategoryData);
            setNestedItemCategory(nestedItemCategoryData);
            // console.log('restaurantData',restaurantData);
            // console.log('groupedCards',groupedCards);
            // console.log('itemCategory',itemCategoryData);

        } catch (error) {
            console.log(error);
        }

    }
    return {restaurantData, groupedCards, itemCategory, nestedItemCategory};
}
export default useRestaurantMenu;