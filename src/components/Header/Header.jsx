import React from "react";
import Logo from "../Logo/Logo";

import styles from "./Header.module.css";

const links = [
  "обо мне",
  "контакты",
  "мой стек",
  "мой проекты",
  "отзывы",
  "статьи",
  "код работы",
];
const Header = () => {
  const navLinks = links.map((link, index) => {
    return (
      <a className={styles.link} key={index}>
        {link}
      </a>
    );
  });
  return (
    <div className={styles.header}>
      <Logo />

      <nav className={styles.nav}>{navLinks}</nav>
    </div>
  );
};

export default Header;
