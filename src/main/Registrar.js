import React, { useState, useEffect, useContext } from "react";
import { context } from "../CartContext";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Registrar = () => {
  const resultado = useContext(context);
  const [usuario, setUsuario] = useState();
  const [nombre, setNombre] = useState([]);
  const [mail, setMail] = useState([]);
  const [numero, setNumero] = useState([]);
  const [pass, setPass] = useState([]);

  const nombreForm = (e) => {
    const value = e.target.value;
    setNombre(value);
    setUsuario({ name: nombre, email: mail, tel: numero, password: pass });
  };
  const mailForm = (e) => {
    const value = e.target.value;
    setMail(value);
    setUsuario({ name: nombre, email: mail, tel: numero, password: pass });
  };
  const passForm = (e) => {
    const value = e.target.value;
    setPass(value);
    setUsuario({ name: nombre, email: mail, tel: numero, password: pass });
  };
  const numeroForm = (e) => {
    const value = e.target.value;
    setNumero(value);
    setUsuario({ name: nombre, email: mail, tel: numero, password: pass });
  };
  const hacerPedido = () => {
    setUsuario({ name: nombre, email: mail, tel: numero, password: pass });
    if (nombre.length > 0 && mail > 0 && numero > 0 && pass > 0) {
      toast.success("Se ha registrado con éxito!");
      resultado.mandarUsuario(usuario);
    } else {
      toast.error("Los valores no son válidos.");
    }
  };

  return (
    <>
      <div class="formulario">
        <fieldset>
          <label>Usuario:</label>
          <input
            type="text"
            onChange={nombreForm}
            placeholder="Nombre"
            autocomplete="off"
          ></input>
          <label>Mail:</label>
          <input
            type="email"
            onChange={mailForm}
            placeholder="Mail"
            autocomplete="off"
          ></input>
          <label>Número:</label>
          <input
            type="tel"
            onChange={numeroForm}
            placeholder="Número"
            autocomplete="off"
          ></input>
          <label>Contraseña</label>
          <input
            type="password"
            onChange={passForm}
            placeholder="Número"
            autocomplete="off"
          ></input>
        </fieldset>
      </div>
      <NavLink to="/">
        <button onClick={hacerPedido}>Registrarse</button>
      </NavLink>
    </>
  );
};

export default Registrar;
