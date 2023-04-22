import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css";
import React, { useContext } from "react";
import { appContext } from "../../context/appContext";
import { Link } from "react-router-dom";

library.add(faShoppingCart);

const CartWidget = () => {
  const { getCartCount } = useContext(appContext);
  return (
    <div className="cart-container">
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {/* Si el carrito esta vacio, muestro el icono pero oculto el circulo rojo que va a contener el numero.
        No uso {getCartCount() > 0 && "cart-number"} porque me esta llorando la consola con que no le gusta */}
        <div className={getCartCount() > 0 ? "cart-number" : ""}>
          {/* Similar pero la condicion del className no podia extenderla 
          a esto, asi que tuve que repetirlo. Si hay algo en el carrito muestro el numero */}
          {getCartCount() > 0 && (
            <span className="number">
              {getCartCount() > 999 ? "999+" : getCartCount()}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};
export default CartWidget;
