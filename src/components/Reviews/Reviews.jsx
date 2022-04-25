import React from "react";

import styles from "./Reviews.module.css";
// import cn from "classnames";
const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.header}>Отзывы</h3>
      <form action="#" method="post">
        <input type="text" name="review" placeholder="Введите текст" />
        {/*id=""*/}
        <button type="submit">Опубликовать</button>
      </form>
    </div>
  );
};

export default Reviews;
