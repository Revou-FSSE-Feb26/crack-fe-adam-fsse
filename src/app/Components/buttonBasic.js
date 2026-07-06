"use client";

import styles from "@/app/globalStyling.module.css";
import { useState } from "react";

export default function ButtonBasic({ buttonTitle }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Remove the class after 100ms so it bounces back up
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  return (
    <button 
      className={`${styles.buttonBasic} ${isClicked ? styles.buttonClicked : ''}`}
      onClick={handleClick}
    >
      {buttonTitle ? buttonTitle : "Default Button Title"}
    </button>
  );
}