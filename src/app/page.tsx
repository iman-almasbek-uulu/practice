import Image from "next/image";
import styles from "./page.module.css";
import UniversityList from "./components/university";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UniversityList />
      </main>
    </div>
  );
}
