"use client";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const ItemProject = () => {
  const pathname = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const title = pathname.id;
  const projectName = capitalizeWords(title.replace(/-/g, " "));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 700);
  }, []);
  return (
    <>
      <AnimatePresence>
        {isLoading && <LoaderPage pageName={projectName} />}
      </AnimatePresence>
      <div>PROYECTO</div>
    </>
  );
};

export default ItemProject;
