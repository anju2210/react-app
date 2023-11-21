import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
// console.log("props",data);

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div >
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick = {handleClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
                
            </div>

            {/* Accordion Body */}
            

        </div>
    )
}

export default RestaurantCategory;