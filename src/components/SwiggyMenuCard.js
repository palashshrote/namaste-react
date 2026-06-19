import { useState } from "react";
import MenuAccordian from "./MenuAccordian";
const SwiggyMenuCard = ({ itemCategory, nestedItemCategory }) => {
    const [showIndex, setShowIndex] = useState(null);
    return (
        <div className="w-[60%] mx-auto my-4 bg-gray-50 shadow-xl">
            {itemCategory?.map((item, i) => (

                <MenuAccordian key={item.card.card.categoryId} title={item.card.card.title} menuList={item.card.card.itemCards} showItems={item.card.card.categoryId === showIndex} setShowIndex={() => setShowIndex(item.card.card.categoryId === showIndex ? null : item.card.card.categoryId)} />
                
            ))}

            {/* {nestedItemCategory?.map((item, i) => (
                <div key={item.card.card.categoryId}>
                    {item?.card.card.categories.map((category) =>
                        (<MenuAccordian key={category.categoryId} title={item.card.card.title} menuList={category.itemCards} categoryTitle={category.title} showItems={category.categoryId === showIndex} setShowIndex={() => setShowIndex(category.categoryId === showIndex ? null : category.categoryId)} />)
                    )}
                </div>
            ))} */}
        </div>
    );
}
export default SwiggyMenuCard;