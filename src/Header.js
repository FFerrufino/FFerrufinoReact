import Men from "./HeaderComps/Men";
import Women from "./HeaderComps/Women";
import CartWidget from "./HeaderComps/CartWidget";
import Home from "./HeaderComps/Home";
import { NavLink } from "react-router-dom";

const Header = () => {
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
    </header>
  );
};
export default Header;
