import React from "react";
import CollectionItem  from "../collection-item/collection-item.component";
import "./collection-preview.style.scss"

const CollectionPreview = ({title ,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item,idx) => idx < 4)  // get only four items in array
                .map(item =>(                   // get data out foe review
                <CollectionItem key={item.id} item ={item}/>
                ))}
        </div>
    </div>
)

export default CollectionPreview; 