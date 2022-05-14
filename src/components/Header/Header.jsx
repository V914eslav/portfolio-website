import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Logo";
import routesConfig from "../../routes/routesConfig";

import styles from "./Header.module.css";
const Header = () => {
  const header = routesConfig.map(({ path, name }, index) => {
    return (
      <NavLink to={path} key={index} className={styles.link}>
        {name}
      </NavLink>
    );
  });
  return (
    <div className={styles.header}>
      <Logo />
      <nav className={styles.nav}> {header}</nav>
    </div>
  );
};

export default Header;
