import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";

const BlackFriday = () => {
  return (
    <article className={styles.blackfriday}>
      <div className={styles.blackfriday__inner}>
        <p className={styles.blackfriday__text}>–30% на&nbsp;все курсы</p>
        <button
          className={styles.blackfriday__button}
          type="button"
          aria-label="закрыть"
        ></button>
      </div>
    </article>
  );
};

export default BlackFriday;
