import React, { useState } from 'react'

import { cloudinaryBaseApi } from "../utils/constants";

export default function MenuAccordian({ title, menuList, categoryTitle }) {
        const [cardExpanded, setCardExpanded] = useState(true);
    return (
        <div key={title}>
            <div className="flex justify-between w-full">
                <h2 className="text-xl">{categoryTitle === undefined ? title : categoryTitle}</h2>
                <button onClick={() => setCardExpanded((val) => !val)}>{cardExpanded ? "+" : "-"}</button>
            </div>
            {cardExpanded && <div className="mb-10">
                {menuList.map((item) =>
                    <div className="flex justify-between m-4 bg-pink-100 p-4 rounded" key={item.card.info.id}>
                        <div className="text-left mr-4">
                            <h1 className="text-lg">{item.card.info.name}</h1>
                            <p>{item.card.info.finalPrice ?? item.card.info.price}</p>
                            <p>{item.card.info.ratings.aggregatedRating.rating} - {item.card.info.ratings.aggregatedRating.ratingCountV2}</p>
                            <p>{item.card.info.description}</p>
                        </div>
                        <img className="h-30 w-35 rounded" src={cloudinaryBaseApi + item.card.info.imageId} />
                    </div>)}

            </div>}
        </div>
    );
}
