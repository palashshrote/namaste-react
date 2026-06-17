import { useState } from "react";
import MenuAccordian from "./MenuAccordian";
const SwiggyMenuCard = ({ itemCategory, nestedItemCategory }) => {
    // console.log('itemCategory', itemCategory);
    return (
        <div className="w-[60%] mx-auto">
            {itemCategory?.map((item, i) => (

                <MenuAccordian key={item.card.card.id} title={item.card.card.title} menuList={item.card.card.itemCards} />
                // <div key={item.card.card.title}>
                //     <div className="flex justify-between w-full">
                //         <h2 className="text-xl">{item.card.card.title}</h2>
                //         <button onClick={()=> setCardExpanded((val)=> !val)}>{cardExpanded ? "+" : "-"}</button>
                //     </div>
                //     {cardExpanded && <div className="mb-10">
                //         {item.card.card.itemCards.map((item) =>
                //             <div className="flex justify-between m-4 bg-pink-100 p-4 rounded" key={item.card.info.id}>
                //                 <div className="text-left mr-4">
                //                     <h1 className="text-lg">{item.card.info.name}</h1>
                //                     <p>{item.card.info.finalPrice}</p>
                //                     <p>{item.card.info.ratings.aggregatedRating.rating} - {item.card.info.ratings.aggregatedRating.ratingCountV2}</p>
                //                     <p>{item.card.info.description}</p>
                //                 </div>
                //                 <img className="h-30 w-35 rounded" src={cloudinaryBaseApi + item.card.info.imageId} />
                //             </div>)}

                //     </div>}
                // </div>
            ))}

            {nestedItemCategory?.map((item, i) => (
                <div key={item.card.card.id}>
                    {item?.card.card.categories.map((category) =>
                        (<MenuAccordian key={item.card.card.id} title={item.card.card.title} menuList={category.itemCards} categoryTitle={category.title}/>)
                    )}
                </div>
            ))}
        </div>
    );
}
export default SwiggyMenuCard;