import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import Header from "../../components/Header/Header";

import routesConfig from "../../routes/routesConfig";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header />

        <Routes>
          {routesConfig.map(({ path, element }, index) => {
            return <Route path={path} element={element} key={index}></Route>;
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
