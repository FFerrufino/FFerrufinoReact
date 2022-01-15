import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { context } from "../CartContext";

const ItemDetail = ({ data }) => {
  let producto;
  data.map((element) => {
    return (producto = element.producto);
  });

  const resultado = useContext(context);

  const prod = data;

  const enviarProducto = () => {
    resultado.agregarItem(prod, cantidad);
  };

  const [cantidad, setCantidad] = useState(0);

  const cantidadrequerida = (parametro) => {
    setCantidad(parametro);
  };
  if (producto) {
    return (
      <div>
        <ul>
          <li>Nombre: {producto.titulo.stringValue}</li>
          <li>Descripción: {producto.descripcion.stringValue}</li>
          <li>El precio es: {producto.precio.integerValue}</li>
          <li>
            <img src={producto.imagen.stringValue} alt="" />
          </li>
        </ul>
        <ItemCount
          datas={producto.stock.integerValue}
          func={cantidadrequerida}
        />
        <button onClick={enviarProducto}>Agregar al carrito</button>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li>Nombre: </li>
          <li>Descripción: </li>
          <li>El precio es: </li>
        </ul>
      </div>
    );
  }
};
export default ItemDetail;
