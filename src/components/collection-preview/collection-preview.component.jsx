import React from "react";
import './collection-preview.style.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1>{title}</h1>
      <div className="preview">
        {
          items
            .filter((_item, idx) => {
                return idx < 4;
            })
            .map(({id,...otherItemProps}) => (
              <CollectionItem key={id} {...otherItemProps}/>
            ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview;
