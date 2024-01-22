import styles from "./page.module.css";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  );
}
