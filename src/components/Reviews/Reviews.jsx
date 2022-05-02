import React from "react";

import styles from "./Reviews.module.css";
// import cn from "classnames";
const Reviews = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Reviews</h2>
      <form action="#" method="post">
        <input type="text" name="review" placeholder="Введите текст" />
        <button type="submit">Опубликовать</button>
      </form>
    </div>
  );
};

export default Reviews;
