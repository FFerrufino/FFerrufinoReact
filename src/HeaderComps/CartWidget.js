import Carrito from "../imgs/107831.png";
import { useContext } from "react";
import { context } from "../CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const resultado = useContext(context);
  if (resultado.carrito.length !== 0) {
    return (
      <div className="carrito">
        <NavLink to={"/cart"}>
          <img className="icono-header" src={Carrito} alt="" />
        </NavLink>
        <div>Precio total: {resultado.precio}</div>
        <div>Items: {resultado.carrito.length}</div>
      </div>
    );
  } else {
    return (
      <div className="carrito">
        <img className="icono-header" src={Carrito} alt="" />
      </div>
    );
  }
};

export default CartWidget;
