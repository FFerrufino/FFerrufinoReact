import Men from "./HeaderComps/Men";
import Women from "./HeaderComps/Women";
import CartWidget from "./HeaderComps/CartWidget";
import Home from "./HeaderComps/Home";
import SignUp from "./HeaderComps/SignUp";
import LoginButton from "./HeaderComps/LoginButton";
import { NavLink } from "react-router-dom";
import { context } from "./CartContext";
import { useContext, useState, useEffect } from "react";

const Header = () => {
  const resultado = useContext(context);

  return (
    <header className="headerStyle">
      <h1>Título del e-commerce</h1>
      <NavLink to="/">
        <Home />
      </NavLink>
      <NavLink to="/categoria/2">
        <Men />
      </NavLink>
      <NavLink to="/categoria/1">
        <Women />
      </NavLink>
      <CartWidget />

      {!resultado.loginv && (
        <div className="LoginBox">
          <NavLink to="/signup">
            <SignUp />
          </NavLink>
          <NavLink to="/login">
            <LoginButton />
          </NavLink>
        </div>
      )}
      {resultado.loginv && (
        <div className="LoginBox">
          <button onClick={resultado.cerrarsesion}>Cerrar sesión</button>
        </div>
      )}
    </header>
  );
};
export default Header;
