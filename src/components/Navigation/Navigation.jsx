import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {

      const setActiveClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);
  };

  return (
    <nav>
      <NavLink to="/" className={setActiveClass}>Home</NavLink>
      <NavLink to="/catalog" className={setActiveClass}>Catalog</NavLink>
    </nav>
  );
};

export default Navigation;