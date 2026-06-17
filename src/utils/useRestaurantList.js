import {useState, useEffect} from "react";
import { swiggyApiLL } from "../utils/constants";

const useRestaurantList = (geoPosition, setIsLoading) => {
    const [RestaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    useEffect(() => {
        fetchData(geoPosition);
    }, [geoPosition]);
    async function fetchData(geoPosition) {
        setIsLoading(true);
        const lat = geoPosition.split(",")[0];
        const long = geoPosition.split(",")[1];
        try {
            const response = await fetch(swiggyApiLL(lat, long));
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // const restaurantData = data?.data?.cards;
            const restaurantData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // console.log(restaurantData);
            setRestaurantList(restaurantData);
            setFilteredRestaurantList(restaurantData);
        } catch (error) {
            console.log(error);
        }
        finally { setIsLoading(false); }
    }
    return {RestaurantList, setRestaurantList ,filteredRestaurantList, setFilteredRestaurantList}
}
export default useRestaurantList;