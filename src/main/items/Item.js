import { NavLink } from "react-router-dom";

const Item = ({ datos, id }) => {
  return (
    <li className="listaprod">
      {datos} <NavLink to={"/item/" + id}>Ver detalles</NavLink>
    </li>
  );
};
export default Item;
