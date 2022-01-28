import React, { useState, useEffect, useContext } from "react";
import { db } from "../Firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { context } from "../CartContext";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [nombre, setNombre] = useState([]);
  const [pass, setPass] = useState([]);
  const resultado = useContext(context);

  const formnombre = (e) => {
    const value = e.target.value;
    setNombre(value);
  };

  const formpass = (e) => {
    const value = e.target.value;
    setPass(value);
  };
  const traerUsuarios = async () => {
    const usuariosCollection = collection(db, "usuarios");
    const consulta = await getDocs(usuariosCollection);
    const docs_ref = consulta.docs;

    const fomateados = docs_ref.map((documento) => {
      console.log(resultado.loginv);
      // console.log(documento.data().e.name);
      if (nombre === documento.data().e.name) {
        console.log(documento.data().e.name);
        if (pass === documento.data().e.password) {
          localStorage.setItem("token", true);
          localStorage.setItem("name", documento.data().e.name);
          localStorage.setItem("email", documento.data().e.email);
          localStorage.setItem("tel", documento.data().e.tel);
          resultado.setLoginv(true);
          toast.success("Se ha iniciado sesión con éxito!");
        } else {
          console.log("Error");
        }
      } else {
        console.log("Error");
      }
    });
  };
  return (
    <>
      <div class="formulario">
        <fieldset>
          <label>Usuario:</label>
          <input
            type="text"
            placeholder="Nombre"
            onChange={formnombre}
            autocomplete="off"
          ></input>
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Número"
            onChange={formpass}
            autocomplete="off"
          ></input>
        </fieldset>
      </div>
      <NavLink to="/">
        <button onClick={traerUsuarios}>Confirmar</button>
      </NavLink>
    </>
  );
};

export default Login;
