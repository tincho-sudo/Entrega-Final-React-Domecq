import React, { useState } from "react";
import Button from "../Button/Button";
import "./itemCount.css";

export default function ItemCount(props) {
  ItemCount.defaultProps = {
    stock: 0,
  };
  const [count, setCount] = useState(props.stock > 0 ? 1 : 0);

  function handleaAdd() {
    if (count < props.stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className="itemCount">
      {props.stock > 0 ? (
        <div>
          <p
            style={{
              textAlign: "center",
              marginTop: "50px",
              paddingTop: "10px",
            }}
          >
            Stock: {props.stock}
          </p>
          <Button
            onClick={handleSubstract}
            disabled={count === 1}
            display={count === 1 && "none"}
          >
            -
          </Button>
          <span>{count}</span>
          <Button
            onClick={handleaAdd}
            disabled={count === props.stock}
            display={count === props.stock && "none"}
          >
            +
          </Button>
          <Button
            onClick={() => props.onAddToCart(count)}
            disabled={count === 0}
          >
            Agregar al Carrito
          </Button>
        </div>
      ) : (
        <div>
          <h4
            style={{
              marginTop: "40px",
              paddingTop: "10px",
              textAlign: "center",
              color: "red",
            }}
          >
            Fuera de Stock
          </h4>
        </div>
      )}
    </div>
  );
}
