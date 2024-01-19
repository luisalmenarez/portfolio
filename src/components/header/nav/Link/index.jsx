import Link from "next/link";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { slide } from "../anim";

export default function index({ data }) {
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}>
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
}
