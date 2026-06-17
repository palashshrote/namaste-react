import MenuItem from "../components/MenuItem";


const MenuCard = ({ groupedCards }) => {
    return (
        <div className="res-menu">
            {/* 1. Grab the array index (idx) from the map parameters */}
            {groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((card, idx) => {
                
                // 2. Safely fall back to a string if title is missing/undefined
                const sectionTitle = card?.card?.card?.title || "section";
                
                return (
                    // 3. Create an absolute unique key by combining the title and its array index position
                    <div key={`${sectionTitle}-${idx}`}>
                        <h3 className="text-2xl my-2">{card?.card?.card?.title}</h3>
                        <div className="res-menu-card flex flex-wrap">
                            {card?.card?.card?.itemCards?.map((item) => (
                                <MenuItem item={item} key={item?.card?.info?.id} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default MenuCard;