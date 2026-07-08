import styles from "@/app/globalStyling.module.css";
import FormBasic from "@/app/Components/formBasic";
  
export default function LoginPage() {
  return (
    <div className={`${styles.page} ${styles.pageBg}`}>
      <h1 className={styles.h1}>This is Login Page</h1>
      <FormBasic />
    </div>    
  );
}