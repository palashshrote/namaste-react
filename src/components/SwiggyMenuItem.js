import { cloudinaryBaseApi } from "../utils/constants";
import {addItem} from "../utils/cartSlice";
import {useDispatch} from "react-redux";

const SwiggyMenuItem = ({item}) => {
    const dispatch = useDispatch();
    const handleAddItem =(item)=> {
        dispatch(addItem(item));
    }
    return (
        <div className="flex justify-between m-4 bg-gray-100 p-4 rounded" key={item.card.info.id}>
            <div className="text-left mr-4 w-9/12">
                <h1 className="text-lg">{item.card.info.name}</h1>
                <p>{item.card.info.finalPrice ?? item.card.info.price}</p>
                <p>{item.card.info.ratings.aggregatedRating.rating} - {item.card.info.ratings.aggregatedRating.ratingCountV2}</p>
                <p>{item.card.info.description}</p>
            </div>
            <div>
                <div className="absolute">
                    <button onClick={() => handleAddItem(item)} className="bg-white p-1 rounded mx-11 my-25"> Add +</button>
                </div>
                <img className="h-30 w-35 rounded" src={cloudinaryBaseApi + item.card.info.imageId} />
            </div>
        </div>
    );
}
export default SwiggyMenuItem;