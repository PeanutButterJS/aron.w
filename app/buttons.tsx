"use client";

import { use, useEffect, useState } from "react";
import { useGa } from "./hooks/useGA";
import { Modal } from "./modal";
import styles from "./page.module.css";
import { Fira_Code } from "next/font/google";

const fira = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});

export const Buttons = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { sendEvent } = useGa();

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
        <button
          onClick={() => {
            setOpen(1);
            sendEvent("BUTTON_CLICK", { label: "References" });
          }}
          className={styles.button}
        >
          <span className={styles.tag}>{`<button>`}</span>
          <span>{`References`}</span>
          <span className={styles.tag}>{`</button>`}</span>
        </button>
        <button
          onClick={() => {
            setOpen(2);
            sendEvent("BUTTON_CLICK", { label: "Expirience" });
          }}
          className={styles.button}
        >
          <span className={styles.tag}>{`<button>`}</span>
          <span>{`Expirience`}</span>
          <span className={styles.tag}>{`</button>`}</span>
        </button>
        <button
          onClick={() => {
            setOpen(3);
            sendEvent("BUTTON_CLICK", { label: "Education" });
          }}
          className={styles.button}
        >
          <span className={styles.tag}>{`<button>`}</span>
          <span>{`Education`}</span>
          <span className={styles.tag}>{`</button>`}</span>
        </button>
        <button
          onClick={() => {
            setOpen(4);
            sendEvent("BUTTON_CLICK", { label: "Projects" });
          }}
          className={styles.button}
        >
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
