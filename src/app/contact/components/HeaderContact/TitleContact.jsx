import { opacity, slide } from "@/app/assets/anim";
import Rounded from "@/common/RoundedButton";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";
import Container from "@/components/Shared/Container";

const TitleContact = () => {
  const anim = (variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

  return (
    <article className={styles.content}>
      <Container className="flex justify-center gap-40">
        <motion.h2 {...anim(opacity)}>
          <span>¡Comencemos un</span>
          <span>proyecto juntos!</span>
        </motion.h2>

        <motion.div {...anim(opacity)} className={styles.imageContainer}>
          <svg
            width="*"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
          <div className={styles.contentImg}>
            <Image
              loading="lazy"
              fill={true}
              alt={"Image Contact"}
              src={`/images/background.jpg`}
              className="object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </article>
  );
};

export default TitleContact;
