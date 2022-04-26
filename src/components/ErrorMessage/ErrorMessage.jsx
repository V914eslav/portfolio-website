import React from "react";

import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>Произошла ошибка</span>
      <span className={styles.text}>попробуйте зайти позже</span>
    </div>
  );
};

export default ErrorMessage;
