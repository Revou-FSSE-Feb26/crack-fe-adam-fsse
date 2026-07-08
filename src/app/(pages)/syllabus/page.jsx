import styles from "@/app/globalStyling.module.css";
import CardBasic from "@/app/Components/cardBasic";
  
export default function SyllabusPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>This is Syllabus Page</h1>

      <div className={styles.gridView}>
        <CardBasic cardTitle="Materi 1" cardImage="/assets/images/materi01.png" />
        <CardBasic cardTitle="Materi 2" cardImage="/assets/images/materi02.png" />
        <CardBasic cardTitle="Materi 3" cardImage="/assets/images/materi03.png" />
        <CardBasic cardTitle="Materi 4" cardImage="/assets/images/materi04.png" />
        <CardBasic cardTitle="Materi 5" cardImage="/assets/images/materi05.png" />
        <CardBasic cardTitle="Materi 6" cardImage="/assets/images/materi06.png" />
      </div>
    </div>    
  );
}