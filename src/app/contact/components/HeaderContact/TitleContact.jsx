import { opacity, slide } from "@/app/assets/anim";
import Rounded from "@/common/RoundedButton";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

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
      <motion.h2 {...anim(opacity)}>¡Comencemos un proyecto juntos! </motion.h2>
      <motion.div {...anim(slide)} className={styles.strip}></motion.div>
      <section className="w-full mx-20 mt-8">
        <div className="container grid md:gap-8 lg:grid-cols-3 lg:gap-12 xl:gap-24">
          <div className="space-y-8 lg:col-span-2">
            <div className="py-10 space-y-6">
              <label
                htmlFor="name"
                className="block text-4xl italic font-bold text-gray-300">
                ¿Cuál es tu nombre?
              </label>
              <input
                id="name"
                className="w-full px-4 py-8 text-3xl text-gray-200 bg-transparent border-b-2 rounded-md focus:outline-none"
                placeholder="John Doe *"
              />
            </div>
            <div className="py-10 space-y-6">
              <label
                htmlFor="email"
                className="block text-4xl italic font-bold text-gray-300">
                ¿Cuál es tu email?
              </label>
              <input
                id="email"
                className="w-full px-4 py-8 text-4xl bg-transparent border-b-2 rounded-md text-gray-50 focus:outline-none"
                placeholder="john@doe.com *"
                type="email"
              />
            </div>
            <div className="py-10 space-y-6">
              <label
                htmlFor="message"
                className="block text-4xl italic font-bold text-gray-50">
                Mensaje
              </label>
              <textarea
                className="w-full px-4 py-4 text-4xl bg-transparent rounded-md text-gray-50 focus:outline-none"
                id="message"
                placeholder="Hola Luis, me gustaría tenerte en nuestro equipo... *"
                style={{ resize: "none" }}
              />
            </div>
            <div className="grid w-full">
              <motion.div className={styles.stripForm}>
                <article className={styles.buttonContainer}>
                  <Rounded
                    backgroundColor={"#334BD3"}
                    className={styles.button}>
                    <p>Enviar</p>
                  </Rounded>
                </article>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default TitleContact;
