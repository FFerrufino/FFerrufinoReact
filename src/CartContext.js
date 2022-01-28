import { createContext, useContext, useState } from "react";
import { db } from "./Firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const context = createContext();

const { Provider } = context;

const CartContext = ({ children }) => {
  const valorInicial = [];
  const [carrito, setCarrito] = useState(valorInicial);
  const [precio, setPrecio] = useState(0);
  const [loginv, setLoginv] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  const agregarItem = (e, cantidad) => {
    if (
      carrito.some(function (el) {
        return el.id === e[0].producto.id.stringValue;
      })
    ) {
      let copia = [...carrito];
      carrito.map((carrito2) => {
        if (carrito2.id === e[0].producto.id.stringValue) {
          copia = copia.filter(
            (element) => element.id !== e[0].producto.id.stringValue
          );
          copia.push({
            ...carrito2,
            quantity: carrito2.quantity + cantidad,
            price: e[0].producto.precio.integerValue,
          });
        }
      });

      setCarrito(copia);
      let cantidadAgregada = cantidad * e[0].producto.precio.integerValue;
      setPrecio(precio + cantidadAgregada);
    } else {
      const newProd = {
        title: e[0].producto.titulo.stringValue,
        id: e[0].producto.id.stringValue,
        quantity: cantidad,
        price: e[0].producto.precio.integerValue,
      };
      const copia = [...carrito];
      copia.push(newProd);
      setCarrito(copia);

      let cantidadAgregada = cantidad * e[0].producto.precio.integerValue;
      setPrecio(precio + cantidadAgregada);
    }
  };

  const sacarItem = (e, price, ecantidad) => {
    let copia = [...carrito];
    copia = copia.filter((element) => element.id !== e);
    setCarrito(copia);

    let cantidadSustraida = ecantidad * price;
    setPrecio(precio - cantidadSustraida);
    toast.success("Se ha realizado un cambio en el carrito.");
  };

  const borrarCarrito = () => {
    setCarrito(valorInicial);
  };

  const mandarCarrito = async (e) => {
    console.log(e);
    let carritoObj = { carrito, e };
    console.log(carritoObj);
    const carritoCollection = collection(db, "pedidos");
    const referencia = await addDoc(carritoCollection, carritoObj);
    console.log(referencia.id);
  };
  const mandarUsuario = async (e) => {
    console.log(e);
    let usuario = { e };
    console.log(usuario);
    const carritoCollection = collection(db, "usuarios");
    const referencia = await addDoc(carritoCollection, usuario);
    console.log(referencia.id);
  };
  const isInCart = (e) => {
    if (
      carrito.some(function (el) {
        return el.id === e.id;
      })
    ) {
      console.log("true");
    } else {
      console.log("false");
    }
  };
  const cerrarsesion = () => {
    setLoginv(false);
    localStorage.setItem("token", false);
    localStorage.clear();
    toast.success("Se ha cerrado la sesión.");
  };
  const metodos = {
    carrito,
    precio,
    loginv,
    cerrarsesion,
    setLoginv,
    mandarUsuario,
    agregarItem,
    sacarItem,
    borrarCarrito,
    isInCart,
    mandarCarrito,
  };

  return <Provider value={metodos}>{children}</Provider>;
};

export default CartContext;
