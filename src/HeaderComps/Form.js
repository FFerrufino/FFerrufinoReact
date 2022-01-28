import React, { useState, useEffect, useContext } from "react";
import { context } from "../CartContext";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {
  const resultado = useContext(context);
  const [usuario, setUsuario] = useState([]);
  const [nombre, setNombre] = useState([]);
  const [mail, setMail] = useState([]);
  const [numero, setNumero] = useState([]);

  const nombreForm = (e) => {
    const value = e.target.value;
    setNombre(value);
    setUsuario([nombre, mail, numero]);
  };
  const mailForm = (e) => {
    const value = e.target.value;
    setMail(value);
    setUsuario([nombre, mail, numero]);
  };
  const numeroForm = (e) => {
    const value = e.target.value;
    setNumero(value);
    setUsuario([nombre, mail, numero]);
  };
  const hacerPedido = () => {
    console.log(nombre);
    console.log(mail);
    console.log(numero);
    setUsuario([nombre, mail, numero]);
    console.log(usuario);
    mandarForm();
  };
  const mandarForm = () => {
    setTimeout(() => {
      setUsuario([nombre, mail, numero]);
      resultado.mandarCarrito(usuario);
      resultado.borrarCarrito();
    }, 2000);
    toast.success("Se ha realizado el pedido con éxito!");
  };

  const loginPedido = () => {
    const loginUsuario = [
      localStorage.getItem("name"),
      localStorage.getItem("email"),
      localStorage.getItem("tel"),
    ];
    resultado.mandarCarrito(loginUsuario);
    resultado.borrarCarrito();
    toast.success("Se ha realizado el pedido con éxito!");
  };
  if (!JSON.parse(localStorage.getItem("token"))) {
    return (
      <>
        <div class="formulario">
          <fieldset>
            <label>Nombre:</label>
            <input
              type="text"
              onChange={nombreForm}
              placeholder="Nombre"
              autocomplete="off"
            ></input>
            <label>Mail:</label>
            <input
              type="text"
              onChange={mailForm}
              placeholder="Mail"
              autocomplete="off"
            ></input>
            <label>Número:</label>
            <input
              type="text"
              onChange={numeroForm}
              placeholder="Número"
              autocomplete="off"
            ></input>
          </fieldset>
        </div>
        <NavLink to="/">
          <button onClick={hacerPedido}>Terminar pedido</button>
        </NavLink>
      </>
    );
  } else {
    return (
      <>
        <div class="formulario">
          <fieldset>
            <label>Nombre:</label>
            <h3>{localStorage.getItem("name")}</h3>
            <label>Mail:</label>
            <h3>{localStorage.getItem("email")}</h3>
            <label>Número:</label>
            <h3>{localStorage.getItem("tel")}</h3>
          </fieldset>
          <NavLink to="/">
            <button onClick={loginPedido}>Terminar pedido</button>
          </NavLink>
        </div>
      </>
    );
  }
};

export default Form;
