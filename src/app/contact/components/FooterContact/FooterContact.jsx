import styles from "./style.module.scss";
import Magnetic from "@/common/Magnetic";
import Link from "next/link";

const FooterContact = () => {
  return (
    <footer className={styles.info}>
      <div>
        <span>
          <h3>Versión</h3>
          <p>2024 © Edition</p>
        </span>
        <span>
          <h3>Locación</h3>
          <p>Medellín - Colombia</p>
        </span>
      </div>
      <div>
        <span>
          <h3>Socials</h3>
          <Magnetic>
            <Link href="https://github.com/luisalmenarez" target="_blank">
              Github
            </Link>
          </Magnetic>
        </span>
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
      </div>
    </footer>
  );
};

export default FooterContact;
