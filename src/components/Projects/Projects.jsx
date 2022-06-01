import React, { Component } from "react";
import ProjectCard from "../ProjectCard";

import styles from "./Projects.module.css";

export default class Projects extends Component {
  render() {
    return (
      <div className={styles.cards}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    );
  }
}
