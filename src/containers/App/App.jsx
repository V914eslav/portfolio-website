import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyStack from "../../components/MyStack";
import Reviews from "../../components/Reviews";
import AboutMe from "../../components/AboutMe";

import ErrorMessage from "../../components/ErrorMessage";
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

      <MyStack />
      <Reviews />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
