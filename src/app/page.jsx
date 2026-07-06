import styles from "@/app/globalStyling.module.css";
import ButtonBasic from "./Components/buttonBasic";
import FormBasic from "./Components/formBasic";
import Link from "next/link";
  
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
      <h1 className={styles.h1}>Learning Management System</h1>
      <h3 className={styles.h3}>Welcome to our Learning Management System. Click Login to proceed..</h3>
      <Link href="/login">
      <ButtonBasic buttonTitle="LOGIN" />
      </Link>
      </div>
    </div>    
  );
}