import { cloudinaryBaseApi } from "../utils/constants";
import {Link} from "react-router";

const RestaurantCard = ({ resData }) => {
    const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData.info;
    return (
        <Link className="dec-none" to={"/restaurant/" + resData.info.id}>
            <div className="res-card bg-pink-200 h-100 m-2 p-3 rounded-xl">
                <img className="res-logo h-55 w-70 rounded-xl" alt="res-logo" src={cloudinaryBaseApi + cloudinaryImageId} />
                <h2 className="text-3xl">{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{"Rated: " + avgRating}</h3>
                <h3>{sla.deliveryTime + " mins"}</h3>
            </div>
        </Link>
    );
}

export default RestaurantCard;