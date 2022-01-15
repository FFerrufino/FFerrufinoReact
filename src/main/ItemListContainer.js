import ItemList from "./items/ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../Firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      if (!id) {
        const productos2 = collection(db, "productos");

        const promesa = getDocs(productos2);
        let lista = [];
        promesa
          .then((resultado) => {
            resultado.forEach((doc) => {
              lista.push(doc.data());
            });
            setProductos(lista);
          })
          .catch(() => {
            console.log("error");
          });
      } else {
        let lista = [];
        const productos2 = collection(db, "productos");

        const q = query(productos2, where("categoria", "==", id));
        getDocs(q).then((snapshot) => {
          if (snapshot.size === 0) {
            console.log("no hay resultados");
          }
          snapshot.forEach((doc) => {
            lista.push(doc.data());
          });
          setProductos(lista);
        });
      }
    }, 1);
  }, [id]);

  return <ItemList data={productos} />;
};

export default ItemListContainer;
