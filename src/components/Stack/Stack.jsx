import React, { Component } from "react";
import StackCard from "../StackCard/StackCard";

import styles from "./Stack.module.css";
export default class Stack extends Component {
  render() {
    return (
      <div className={styles.stack}>
        <StackCard />
        <StackCard />
        <StackCard />
        <StackCard />
      </div>
    );
  }
}
