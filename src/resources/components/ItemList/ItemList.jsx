import React from "react";
import Item from "../Item/Item";
//import "./itemList.css"; Por si lo necesito a futuro

function ItemList(props) {
  return (
    <div className="item-list">
      <Item
        id={props?.id}
        title={props?.title}
        img={props?.image}
        gen={props?.gen}
        price={props?.price}
        desc={props?.desc}
        offer={props?.offer}
        stock={props?.stock}
        linkTo={true}
      />
    </div>
  );
}

export default ItemList;
