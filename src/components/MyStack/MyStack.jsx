import React from "react";

// import cn from "classnames";
import styles from "./MyStack.module.css";

const links = [
  "Html",
  "Css, Scss, Less, Css in js",
  "Javascript",
  "JQuery",
  "ReactJS",
  "TypeScript",
  "NodeJS",
  "PHP",
  "Laravel",
];
const MyStack = () => {
  const navLinks = links.map((link, index) => {
    return (
      <a className={styles.link} key={index}>
        {link}
      </a>
    );
  });
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>{navLinks}</nav>
    </div>
  );
};

export default MyStack;
