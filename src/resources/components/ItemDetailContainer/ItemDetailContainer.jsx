import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { getItem } from "../../../services/db";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const product = await getItem(id);
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {loading ? (
        <Spinner />
      ) : product.index !== -1 ? (
        <ItemDetail
          id={product?.id}
          image={product?.image}
          title={product?.title}
          cat={product?.cat}
          brand={product?.brand}
          gen={product?.gen}
          price={product?.price}
          desc={product?.desc}
          stock={product?.stock}
          offer={product?.offer}
          linkTo={false}
        />
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "bold" }}>No existe el producto</h1>{" "}
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "underline",
              fontWeight: "bold",
              marginTop: "50px",
            }}
          >
            Ir al Inicio
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
