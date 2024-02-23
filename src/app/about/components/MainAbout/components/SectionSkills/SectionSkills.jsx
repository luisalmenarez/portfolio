import { motion } from "framer-motion";
import styles from "./style.module.scss";

const SectionSkills = () => {
  return (
    <article className={styles.containerSkills}>
      <header className={styles.title}>
        <h3>Especializado en</h3>
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.2,
          }}>
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.4,
          }}>
          .
        </motion.span>
      </header>
      <section className={styles.details}>
        <article className={styles.details__section}>
          <h2 className={styles.role}>01</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <h4>Design</h4>
            <p>
              With a solid track record in designing websites and apps, I
              deliver strong and user-friendly digital designs. Solid company
              branding is the foundation of any succesful website.
            </p>
          </li>
          <div className={styles.stripMobile}></div>
        </article>
        <div className={styles.details__section}>
          <h2 className={styles.role}>02</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <h4>Development</h4>
            <p>
              I build scalable websites from scratch that fit seamlessly with
              design. My focus is on micro animations, transitions and
              interaction. For content management I use Kirby CMS.
            </p>
          </li>
          <div className={styles.stripMobile}></div>
        </div>
        <div className={styles.details__section}>
          <h2 className={styles.role}>03</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <h4>The full package</h4>
            <p>
              A complete website from concept to implementation, that s what
              makes me stand out. My great sense for design and my development
              skills enable me to create kick-ass projects.
            </p>
          </li>
          <div className={styles.stripMobile}></div>
        </div>
      </section>
    </article>
  );
};

export default SectionSkills;
