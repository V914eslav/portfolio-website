import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from "../About";
import Projects from "../Projects";
import Home from "../Home";
import Stack from "../Stack";
import Logo from "../../components/Logo/";
import Header from "../../components/Header/Header";

import routesConfig from "../../routes/routesConfig";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header />
        {/* <Logo />

        {routesConfig.map(({ path, name }, index) => {
          return (
            <NavLink to={path} key={index}>
              {name}
            </NavLink>
          );
        })} */}
        <Routes>
          {routesConfig.map(({ path, element }, index) => {
            return <Route path={path} element={element} key={index}></Route>;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
