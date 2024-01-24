import styles from "./page.module.css";
import Landing from "@/components/Landing";
import Description from "@/components/Description";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Projects />
    </main>
  );
}
