import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

const Navigation = () => {
  const setActiveClass = ({ isActive }) =>
    clsx(style.link, isActive && style.active);

  return (
    <nav className={style.nav}>
      <NavLink to="/" end className={setActiveClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={setActiveClass}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
