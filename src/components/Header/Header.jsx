import React from "react";

import styles from "./Header.module.css";

const links = [
  "обо мне",
  "контакты",
  "мой стек",
  "мой проекты",
  "отзывы",
  "статьи",
  "код сайта",
];
const Header = () => {
  const navLinks = links.map((link, index) => {
    return (
      <a className={styles.link} key={index}>
        {link}
      </a>
    );
  });
  const logo = <a className={styles.logo}>V914</a>;
  return (
    <div className={styles.header}>
      {logo}
      <nav className={styles.nav}>{navLinks}</nav>
    </div>
  );
};

export default Header;
