import React, { Component } from "react";

import Banner from "../../components/Banner";
import Projects from "../../components/Projects";
import Stack from "../../components/Stack";
import Reviews from "../../components/Reviews";
import Contacts from "../../components/Contacts";

import styles from "./Home.module.css";

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Banner />
        <Stack />
        <Projects />
        <Reviews />
        <Contacts />
      </div>
    );
  }
}
