import styles from "./style.module.scss";
import Magnetic from "@/common/Magnetic";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "@/app/assets/anim";

const ContactDetails = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/573002841219", "_blank");
  };

  const anim = (variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

  return (
    <motion.section {...anim(slide)} className="text-white px-28 pt-44">
      <h3 className="mb-4 text-xl italic uppercase text-gray-200/50">
        Datos de contacto
      </h3>
      <article className={styles.containerDetails}>
        <Magnetic>
          <Link href="mailto:luisalmenarez0428@gmail.com">
            luisalmenarez0428@gmail.com
          </Link>
        </Magnetic>
        <Magnetic>
          <p onClick={handleWhatsAppClick}>+57 300 284 1219</p>
        </Magnetic>
      </article>
      <article className={styles.containerDetails}>
        <h3 className="mt-20 text-xl italic uppercase text-gray-200/50">
          Redes sociales
        </h3>
        <Magnetic>
          <Link href="https://github.com/luisalmenarez" target="_blank">
            Github
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            href="https://www.linkedin.com/in/luisalmenarez/"
            target="_blank">
            Linkedin
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            href="https://www.instagram.com/_luisalmenarez/"
            target="_blank">
            Instagram
          </Link>
        </Magnetic>
        <Magnetic>
          <Link href="https://twitter.com/_luisalmenarez" target="_blank">
            Twitter
          </Link>
        </Magnetic>
      </article>
    </motion.section>
  );
};

export default ContactDetails;
