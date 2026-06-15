import {cloudinaryBaseApi} from "../utils/constants";

const MenuItem = ({item}) => {
    return (
        <div className="menu-item-card h-110 bg-pink-100 mr-4 p-4 w-75 rounded-2xl">
            <img className="res-logo h-55 w-auto rounded-2xl" alt="res-logo" src={cloudinaryBaseApi + item?.card?.info?.imageId} />
            <p className="my-2 text-2xl">{item?.card?.info?.name}</p>
            <p className="my-2">{item?.card?.info?.description}</p>
            <p className="my-2">{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p>

        </div>
    );
}
export default MenuItem;