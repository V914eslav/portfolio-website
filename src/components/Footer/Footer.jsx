import React from "react";
import Logo from "../Logo/Logo";

import styles from "./Footer.module.css";
import cn from "classnames";
const Footer = ({ theme }) => {
  return (
    <div className={cn(styles.footer, styles[theme])}>
      <div className={styles.stub}>Stub</div>
      <Logo theme="light" />
    </div>
  );
};

export default Footer;
