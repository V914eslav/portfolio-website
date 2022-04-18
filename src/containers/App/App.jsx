import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Banner from "../../components/Banner";
import Header from "../../components/Header";
import routesConfig from "../../routes/routesConfig";

import styles from "./App.module.css";
// import cn from "classnames";

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Banner />

        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
