import styles from "./page.module.css";
import Landing from "@/components/Landing";
import Description from "@/components/Description";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
    </main>
  );
}
