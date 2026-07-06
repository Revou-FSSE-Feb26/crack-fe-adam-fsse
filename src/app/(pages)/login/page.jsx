import styles from "@/app/globalStyling.module.css";
import FormBasic from "@/app/Components/formBasic";
  
export default function Login() {
  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>This is Login Page</h1>
      <FormBasic />
    </div>    
  );
}