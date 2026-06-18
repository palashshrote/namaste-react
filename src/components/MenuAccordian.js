import React, { useState } from 'react'

import { cloudinaryBaseApi } from "../utils/constants";

export default function MenuAccordian({ title, menuList, categoryTitle }) {
    const [cardExpanded, setCardExpanded] = useState(true);
    return (
        <div key={title}>
            <div  onClick={() => setCardExpanded((val) => !val)} className="flex justify-between w-full border-gray-200  shadow-md p-4">
                <h2 className="text-xl font-bold">{categoryTitle === undefined ? title : categoryTitle}</h2>
                <button>{cardExpanded ? "-" : "+"}</button>
            </div>
            {cardExpanded && <div className="mb-10">
                {menuList.map((item) =>
                    <div className="flex justify-between m-4 bg-gray-100 p-4 rounded" key={item.card.info.id}>
                        <div className="text-left mr-4 w-9/12">
                            <h1 className="text-lg">{item.card.info.name}</h1>
                            <p>{item.card.info.finalPrice ?? item.card.info.price}</p>
                            <p>{item.card.info.ratings.aggregatedRating.rating} - {item.card.info.ratings.aggregatedRating.ratingCountV2}</p>
                            <p>{item.card.info.description}</p>
                        </div>
                        <div>
                            <div className="absolute">
                                <button className="bg-white p-1 rounded mx-11 my-25">Add +</button>
                            </div>
                            <img className="h-30 w-35 rounded" src={cloudinaryBaseApi + item.card.info.imageId} />
                            
                        </div>
                    </div>)}

            </div>}
        </div>
    );
}
