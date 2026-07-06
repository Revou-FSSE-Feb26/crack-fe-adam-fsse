"use client";

import styles from "@/app/globalStyling.module.css";
import ButtonBasic from "./buttonBasic";

export default function FormBasic() {
  return (
    <form className={styles.form}>
        <h1 className={styles.title}>LOGIN</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input id="email" className={styles.input} type="email" />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <input id="password" className={styles.input} type="password" />
      </div>

      <ButtonBasic buttonTitle="SUBMIT" />

    </form>
  );
}