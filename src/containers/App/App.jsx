import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";

import styles from "./App.module.css";
// import cn from "classnames";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
    </div>
  );
}

export default App;
