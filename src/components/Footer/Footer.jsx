import React, { Component } from "react";
import Logo from "../Logo";

import styles from "./Footer.module.css";
export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        Footer
        <Logo theme="light" />
      </div>
    );
  }
}
