import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Rounded from "@/common/RoundedButton";
import Link from "next/link";
import { opacity } from "@/app/assets/anim";

const HeaderWork = () => {
  const anim = (variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };
  return (
    <motion.section {...anim(opacity)} className={styles.headerWork}>
      <div className={styles.content}>
        <h1>Creando aplicaciones web con el más alto nivel</h1>
        <article className={styles.buttons}>
          <Link href={"https://github.com/luisalmenarez"} target="_blank">
            <Rounded>
              <p>Github</p>
            </Rounded>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/luisalmenarez/"}
            target="_blank">
            <Rounded>
              <p>LinkedIn</p>
            </Rounded>
          </Link>
          <Link
            href={"https://www.instagram.com/_luisalmenarez/"}
            target="_blank">
            <Rounded>
              <p>Instagram</p>
            </Rounded>
          </Link>
        </article>
      </div>
    </motion.section>
  );
};

export default HeaderWork;
