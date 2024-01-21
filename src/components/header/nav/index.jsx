import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import Link from "./Link";
import Curve from "./curve";
import Footer from "./Footer";

export default function index() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <motion.aside
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}>
      <nav className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link key={index} data={{ ...item, index }} />;
          })}
        </div>
        <Footer />
      </nav>
      <Curve />
    </motion.aside>
  );
}
