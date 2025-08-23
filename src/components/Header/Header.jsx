import Navigation from "../Navigation/Navigation.jsx";
import style from "./Header.module.css";
import IconLogotravel from "../../assets/icons/logotravel.svg?react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <NavLink className={style.logotravel} to="/" aria-label="Go to home">
          <IconLogotravel />
        </NavLink>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
