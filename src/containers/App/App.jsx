import React, { Component } from "react";

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

export default class App extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
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
  }
}
