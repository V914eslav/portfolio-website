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
      <div className={styles.nav}> {header}</div>
    </div>
  );
};

export default Header;
