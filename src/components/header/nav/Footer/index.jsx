import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { menuSlide } from "../anim";
import Link from "next/link";

export default function index() {
  const itemsSocial = [
    {
      text: "Github",
      href: "https://github.com/luisalmenarez",
      target: "_blank",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/luisalmenarez/",
      target: "_blank",
    },
    {
      text: "Instagram",
      href: "https://www.instagram.com/_luisalmenarez/",
      target: "_blank",
    },
    {
      text: "Twitter",
      href: "https://twitter.com/_luisalmenarez",
      target: "_blank",
    },
  ];

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.footer}>
      {itemsSocial.map((item, index) => (
        <Link key={index} href={item.href} target={item.target}>
          {" "}
          {item.text}{" "}
        </Link>
      ))}
    </motion.div>
  );
}
