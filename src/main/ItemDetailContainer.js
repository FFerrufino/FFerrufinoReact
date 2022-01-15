import ItemDetail from "./ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../Firebase";
import { where, query, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const productos2 = collection(db, "productos");

    const q = query(productos2, where("id", "==", id));
    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("no hay resultados");
      } else {
        setProducto(
          snapshot.docs.map((doc) => ({
            producto: doc._document.data.value.mapValue.fields,
          }))
        );
      }
    });
  }, []);
  return <ItemDetail data={producto} />;
};
export default ItemDetailContainer;
