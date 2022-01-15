import { useContext } from "react";
import { context } from "../CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const resultado = useContext(context);
  const eliminar = (eid, eprice, ecantidad) => {
    resultado.sacarItem(eid, eprice, ecantidad);
  };
  
  if (resultado.carrito.length === 0) {
    return (
      <NavLink to={"/"}>
        Aún no tienes ningún articulo en tu carrito de compras, aprieta aquí
        para explorar nuestro catálogo de objetos.
      </NavLink>
    );
  } else {
    return (
      <div>
        {resultado.carrito.map((elemento, indice) => {
          <div>{elemento.title}</div>;
          return (
            <ul>
              <li>Artículo: {elemento.title}</li>
              <li>Cantidad: {elemento.quantity}</li>
              <li>Precio individual: {elemento.price}</li>
              <button
                onClick={() =>
                  eliminar(elemento.id, elemento.price, elemento.quantity)
                }
              >
                Eliminar producto
              </button>
            </ul>
          );
        })}
        <NavLink to="/cart/form">
        <button>Terminar compra</button> 
      </NavLink>
      </div>
    );
  }
};

export default Cart;
