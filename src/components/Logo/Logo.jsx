import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Logo.module.css";
import cn from "classnames";
export default class Logo extends Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme = "dark" } = this.props;
    return (
      <NavLink to="/" className={cn(styles.logo, styles[theme])}>
        Logo
      </NavLink>
    );
  }
}
