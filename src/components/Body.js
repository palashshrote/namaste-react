import { useState, useContext } from "react";
import { useOutletContext } from "react-router";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "../components/Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";
const Body = () => {
    const {userName, setNewUser} = useContext(UserContext);
    const {networkConnection} = useOutletContext();
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [geoPosition, setGeoPosition] = useState("21.1520844,79.0886514");
    const { RestaurantList, setRestaurantList, filteredRestaurantList, setFilteredRestaurantList } = useRestaurantList(geoPosition, setIsLoading);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    if (!networkConnection) return <h1>🔴Offline</h1>
    console.log(filteredRestaurantList);
    
    return (
        isLoading ? (<Shimmer />) :
            (
                <div className="body">
                    <select className="search border p-2 m-2 rounded-2xl" onChange={(e) => setGeoPosition(e.target.value)} name="selectedCity" value={geoPosition}>
                        <option value="21.1520844,79.0886514">Nagpur</option>
                        <option value="28.634427267827412,77.21706376554377">Delhi</option>
                        <option value="12.964453162717746,77.57150027743317">Bangalore</option>
                        <option value="19.062601304006108,72.83319748482391">Mumbai</option>
                    </select>
                    <input className="rounded-2xl search border p-2 m-2" name="search" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search bg-green-200 rounded-xl px-4 py-2 m-2" onClick={() => setFilteredRestaurantList(RestaurantList.filter((res) => (res.info.name.toLowerCase().includes(searchText.toLowerCase()))))}>Search</button>
                    <button onClick={() => setFilteredRestaurantList(RestaurantList.filter((res) => (res.info.avgRating >= 4)))} className="filter-btn bg-teal-200 rounded-xl px-4 py-2 m-2">
                        Top Rated Restaurants
                    </button>
                    <button onClick={() => { setFilteredRestaurantList(RestaurantList); setSearchText("") }} className="search bg-gray-200 rounded-xl px-4 py-2 m-2">Reset</button>
                    <div>
                        <label>Username</label>
                        <input value={userName} onChange={(e)=> setNewUser(e.target.value)} className="border border-black" />
                        {/* <button onClick={changeLoggedInUser} className="px-4 py-2 ml-2 bg-amber-50">SET</button> */}
                    </div>
                    <div className="res-container flex flex-wrap">
                        {filteredRestaurantList.map((res) => {
                            if (res.info.id > 454545) return <RestaurantCardPromoted resData={res} key={res.info.id} geoPosition={geoPosition} />
                            else return <RestaurantCard resData={res} key={res.info.id} geoPosition={geoPosition} />;
                        })}
                    </div>
                </div>
            )

    );
}
export default Body;