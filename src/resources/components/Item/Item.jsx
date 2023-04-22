import "./item.css";
import { useContext } from "react";
//useContext
import { appContext } from "../../context/appContext";
import { Link } from "react-router-dom";

function Item(props) {
  // Si el context esta vacio, asigna false
  const { fav, setFavItem } = useContext(appContext) || {
    fav: false,
    setFavItem: false,
  };

  function handleFavorite(evt) {
    evt.preventDefault();
    // le paso prevFav para que el fav corresponda al que acaba de recibirlo y lo mantenga como estado, sino sencillamente se resetea y le pone fav al ultimo que hayas clickeado
    // esta asquerosidad me hizo perder bastante tiempo
    setFavItem((prevFav) => ({
      ...prevFav,
      [props.id]: !prevFav[props.id],
    }));
  }

  let buttonText = fav[props.id] ? "♥" : "♡";
  const classNameFavorite = `item-card_favicon ${
    fav[props.id] ? "favorite" : ""
  }`;

  const itemContent = (
    <>
      <div className="item-card_header">
        <h2>{props.title}</h2>
      </div>
      <div
        className={
          props.stock > 0 ? "item-card_img" : "item-card_img img-disabled"
        }
      >
        <img src={props.img} alt={`Imagen de ${props.title}`} />
      </div>
      <div className="item-card_detail">
        <div className="item-card_detail_content">
          {props.offer && props.offer > 0 ? (
            <>
              <h6>Descuento: {props.offer}%</h6>
              <h5>Genero: {props.gen}</h5>
              {/* Ajusto el precio mostrado en caso de tener descuento */}
              <h6>$ {props.price - (props.price * props.offer) / 100}</h6>
            </>
          ) : (
            <>
              <h5>Genero: {props.gen}</h5>
              <h6>$ {props.price}</h6>
            </>
          )}
        </div>
      </div>
    </>
  );
  return (
    <div id={props.id} className="item-card item-detail-item">
      {props.linkTo ? (
        //solo muestro el boton de fav si estoy en la lista y no en detalle
        <Link to={`/products/${props.id}`} style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "black",
              width: "20px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              opacity: "0.8",
            }}
            onClick={handleFavorite}
            className={classNameFavorite}
          >
            {buttonText}
          </button>

          {itemContent}
        </Link>
      ) : (
        itemContent
      )}
    </div>
  );
}

export default Item;
