import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Logo";
import routesConfig from "../../routes/routesConfig";
const Header = () => {
  const header = routesConfig.map(({ path, name }, index) => {
    return (
      <NavLink to={path} key={index}>
        {name}
      </NavLink>
    );
  });
  return (
    <>
      <Logo />
      {header}
    </>
  );
};

export default Header;
