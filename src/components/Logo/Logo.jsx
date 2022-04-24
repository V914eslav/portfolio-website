import React from "react";

import styles from "./Logo.module.css";
import cn from "classnames";

const Logo = ({ theme = "dark" }) => {
  return (
    <div>
      <a className={cn(styles.logo, styles[theme])}>V914</a>
    </div>
  );
};

export default Logo;
