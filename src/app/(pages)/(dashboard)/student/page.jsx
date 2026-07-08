import styles from "@/app/globalStyling.module.css";
import ButtonBasic from "@/app/Components/buttonBasic";
import Link from "next/link";
  
export default function DashboardPage() {
    const user = {
        firstName: "Stuwart",
        lastName: "Denton",
        username: "stuwartdenton",
        email: "stuwart.denton@example.com",
        role: "Student"
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
                <Link href="/syllabus" className={styles.linkButton}>
                <ButtonBasic buttonTitle="Open Syllabus" />
                </Link>
                <ButtonBasic buttonTitle="View Assignments" />
                <ButtonBasic buttonTitle="Grading" />
            </div>
        </div>
    </div>    
  );
}