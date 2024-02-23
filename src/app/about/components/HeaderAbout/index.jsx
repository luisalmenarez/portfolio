import styles from "./style.module.scss";
import { opacity, slide } from "@/app/assets/anim";
import Rounded from "@/common/RoundedButton";
import Link from "next/link";
import { motion } from "framer-motion";

const anim = (variants) => {
  return {
    initial: "initial",

    animate: "enter",

    exit: "exit",

    variants,
  };
};

const HeaderAbout = () => {
  return (
    <article className={styles.content}>
      <motion.h2 {...anim(opacity)}>
        Construyendo soluciones que desafían los límites
      </motion.h2>
      <motion.div {...anim(slide)} className={styles.strip}>
        <article className={styles.buttonContainer}>
          <Link
            href={"https://www.linkedin.com/in/luisalmenarez/"}
            target="_blank">
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <p>Contáctame</p>
            </Rounded>
          </Link>
        </article>
      </motion.div>
    </article>
  );
};

export default HeaderAbout;
