import React, { useState } from 'react'
import SwiggyMenuItem from "./SwiggyMenuItem";

export default function MenuAccordian({ title, menuList, categoryTitle, showItems, setShowIndex }) {
    
    const handleOnClick =()=> {
        setShowIndex();
    }
    return (
        <div key={title}>
            <div onClick={handleOnClick} className="flex justify-between w-full border-gray-200  shadow-md p-4">
                <h2 className="text-xl font-bold">{categoryTitle === undefined ? title + `(${title.length})`  : categoryTitle + `(${categoryTitle.length})`}</h2>
                <button>{showItems ? "-" : "+"}</button>
            </div>
            {showItems && <div className="mb-10">
                {menuList.map((item) => 
                    <SwiggyMenuItem key={item.card.info.id} item={item} />
                )}

            </div>}
        </div>
    );
}
