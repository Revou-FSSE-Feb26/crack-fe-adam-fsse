import styles from "@/app/globalStyling.module.css";
import ButtonBasic from "@/app/Components/buttonBasic";
import Link from "next/link";
  
export default function DashboardPage() {
    const user = {
        firstName: "Adrian",
        lastName: "Mintz",
        username: "adrianmintz",
        email: "adrian.mintz@example.com",
        role: "Admin"
    };
  return (
    <div className={styles.page}>
        <div className={styles.card}>
        <h1 className={styles.h1}>This is Dashboard Page</h1>
        <h1 className={styles.title}>Welcome, {user.firstName ?? 'User'}!</h1>
        

            <div className={styles.card2}>
            <p><strong>Username:</strong> {user.username ?? 'N/A'}</p>
            <p><strong>Email:</strong> {user.email ?? 'N/A'}</p>
            <p><strong>Role:</strong> <span >{user.role ?? 'N/A'}</span></p>
            </div>
            
            <div className={styles.sideToSide}>
                <ButtonBasic buttonTitle="Modify User" />
                <Link href="/syllabus" className={styles.linkButton}>
                <ButtonBasic buttonTitle="Modify Syllabus" />
                </Link>
            </div>
        </div>
    </div>    
  );
}