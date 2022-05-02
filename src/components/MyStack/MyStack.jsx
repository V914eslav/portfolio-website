import React from "react";

// import cn from "classnames";
import styles from "./MyStack.module.css";

const items = [
  { name: "Html", text: "lorem3 " },
  { name: "Css, Scss, Less, Css in js", text: "lorem3 " },
  { name: "Javascript", text: "lorem3 " },
  { name: "JQuery", text: "lorem3 " },
  { name: "ReactJS", text: "lorem3 " },
  { name: "TypeScript", text: "lorem3 " },
  { name: "NodeJS", text: "lorem3 " },
  { name: "PHP", text: "lorem3 " },
  { name: "Laravel", text: "lorem3 " },
];
const MyStack = () => {
  const listItems = items.map(({ name, text }, index) => {
    return (
      <div className={styles.item} key={index}>
        <div>{name}</div>
        <div>{text}</div>
      </div>
    );
  });
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>My Stack</h2>
      <div className={styles.items}>{listItems}</div>
    </div>
  );
};

export default MyStack;
