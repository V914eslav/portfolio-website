import React from "react";
import Logo from "../Logo/Logo";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const links = [
  { name: "обо мне", path: "/" },
  { name: "контакты", path: "/" },
  { name: "мой стек", path: "/" },
  { name: "мой проекты", path: "/" },
  { name: "отзывы", path: "/" },
  { name: "статьи", path: "/" },
  { name: "код работы", path: "/" },
];
const Header = () => {
  const navLinks = links.map(({ name, path }, index) => {
    return (
      <li className={styles.item} key={index}>
        <Link to={path} className={styles.link}>
          {name}
        </Link>
      </li>
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
