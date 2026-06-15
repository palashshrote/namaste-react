const RestaurantInfoCard = ({resData}) => {
    return (
        <div className="res-info-card">
            <h2 className="text-4xl my-2">{resData.name}</h2>
            <span className="my-2">
                Rating : <span className="font-bold">{resData.avgRating}</span> --- ({resData.totalRatingsString})  -----    {resData.costForTwo}
            </span>
            <p className="my-2">{resData?.cuisines?.join(", ")}</p>
            <p className="my-2">Outlet : {resData.areaName}</p>
            <p className="my-2">{resData?.sla?.slaString}</p>
        </div>
    );
}
export default RestaurantInfoCard;