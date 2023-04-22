import "./itemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Flex from "../Flex/Flex";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { getItems, getItemsCateg, getItemsGen } from "../../../services/db";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId, genId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId === undefined && genId === undefined) {
      getItems().then((resp) => {
        setProducts(resp);
        setLoading(false);
      });
    } else if (genId === undefined) {
      getItemsCateg(categoryId).then((resp) => {
        setProducts(resp);
        setLoading(false);
      });
    } else {
      getItemsGen(genId, categoryId).then((resp) => {
        setProducts(resp);
        setLoading(false);
      });
    }
  }, [categoryId, genId]);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <Flex>
          {products.map((item) => {
            return (
              <ItemList
                key={item?.id}
                id={item?.id}
                title={item?.title}
                price={item?.price}
                image={item?.image}
                cat={item?.cat}
                brand={item?.brand}
                stock={item?.stock}
                gen={item?.gen}
                offer={item?.offer}
                linkTo={true}
              />
            );
          })}
        </Flex>
      )}
    </div>
  );
}

export default ItemListContainer;
