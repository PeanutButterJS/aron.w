"use client";

import { use, useEffect, useState } from "react";
import { Modal } from "./modal";
import styles from "./page.module.css";
import { Fira_Code } from "next/font/google";

const fira = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});

export const Buttons = () => {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const body = document.querySelector("body");
    if (open) {
      body?.classList.add("open");
    } else {
      body?.classList.remove("open");
    }

    return () => {
      body?.classList.remove("open");
    };
  }, [open]);

  return (
    <>
      <div className={`${fira.className} ${styles.buttons}`}>
        <button onClick={() => setOpen(1)} className={styles.button}>
          <span className={styles.tag}>{`<button>`}</span>
          <span>{`References`}</span>
          <span className={styles.tag}>{`</button>`}</span>
        </button>
        <button onClick={() => setOpen(2)} className={styles.button}>
          <span className={styles.tag}>{`<button>`}</span>
          <span>{`Expirience`}</span>
          <span className={styles.tag}>{`</button>`}</span>
        </button>
        <button onClick={() => setOpen(3)} className={styles.button}>
          <span className={styles.tag}>{`<button>`}</span>
          <span>{`Education`}</span>
          <span className={styles.tag}>{`</button>`}</span>
        </button>
        <button onClick={() => setOpen(4)} className={styles.button}>
          <span className={styles.tag}>{`<button>`}</span>
          <span>{`Projects`}</span>
          <span className={styles.tag}>{`</button>`}</span>
        </button>
      </div>
      <Modal
        displayId={open}
        onClose={() => {
          setOpen(null);
        }}
      />
    </>
  );
};
