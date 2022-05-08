import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Logo.module.css";
export default class Logo extends Component {
  render() {
    return (
      <NavLink to="/" className={styles.logo}>
        Logo
      </NavLink>
    );
  }
}
