import React from "react";

import styles from "./AboutMe.module.css";
import cn from "classnames";
const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>About Me</h2>

      <div className={styles.items}>
        {" "}
        <div className={cn(styles.programming, styles.item)}>
          <img src="#" alt="item photo" className={styles.photo} />
          <h4>programming</h4>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            quis.
          </div>
        </div>
        <div className={cn(styles.work, styles.item)}>
          <img src="#" alt="item photo" className={styles.photo} />
          <h4>work</h4>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            quis.
          </div>
        </div>
        <div className={cn(styles.hobby, styles.item)}>
          <img src="#" alt="item photo" className={styles.photo} />
          <h4>hobby</h4>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            quis.
          </div>
        </div>
        <div className={cn(styles.sport, styles.item)}>
          <img src="#" alt="item photo" className={styles.photo} />
          <h4>sport</h4>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            quis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
