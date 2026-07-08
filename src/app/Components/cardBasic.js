"use client";

import styles from "@/app/globalStyling.module.css";
import ButtonBasic from "./buttonBasic";

export default function CardBasic({cardTitle, cardImage}) {
  return (
    <div className={styles.card}>
        <h1 className={styles.title}>{cardTitle}</h1>
        {cardImage && <img src={cardImage} alt={cardTitle} className={styles.img} />}

      <ButtonBasic buttonTitle="OPEN Syllabus" />

    </div>
  );
}