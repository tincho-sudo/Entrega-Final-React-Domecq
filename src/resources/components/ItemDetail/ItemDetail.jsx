import React, { useState, useEffect, useContext } from "react";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { appContext } from "../../context/appContext";
import { Link } from "react-router-dom";

function ItemDetail(props) {
  const { getCountInCart, addItemToCart } = useContext(appContext);

  const [addedToCart, setAddedToCart] = useState(false);
  const [currentItem, setCurrentItem] = useState(props);


  useEffect(() => {
    setAddedToCart(false);
    setCurrentItem(props);
  }, [props]);

  function onAddToCart(count) {
    if (currentItem.stock > 0) {
      addItemToCart(currentItem, count);
      setAddedToCart(true);
    } else {
      alert(`No hay stock de - ${currentItem.title}`);
    }
  }

  const countInCart = getCountInCart(props.id);

  return (
    <div className="item-detail">
      <Item
        id={currentItem.id}
        title={currentItem.title}
        img={currentItem.image}
        brand={currentItem.brand}
        gen={currentItem.gen}
        price={currentItem.price}
        offer={currentItem.offer}
        stock={currentItem.stock}
        className="item-detail-item"
        linkTo={false}
      />
      {!addedToCart ? (
        <ItemCount
          onAddToCart={onAddToCart}
          stock={currentItem.stock - countInCart}
          title={currentItem.title}
        />
      ) : (
        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "50px",
          }}
        >
          Ir al carrito
        </Link>
      )}
      <div className="itemDesc">
        <p>{currentItem.desc}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
