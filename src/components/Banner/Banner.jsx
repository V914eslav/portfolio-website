import React, { Component } from "react";

import styles from "./Banner.module.css";
export default class Banner extends Component {
  render() {
    return (
      <div className={styles.banner}>
        <h1 className={styles.title}>Portfolio</h1>
        <span className={styles.text}>
          Site shows most of the learned technologies of react js
        </span>
      </div>
    );
  }
}
