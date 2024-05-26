"use client";

import { useEffect, useState } from "react";

import { Modal } from "./modal";
import styles from "./page.module.css";
import { Fira_Code } from "next/font/google";
import { Button } from "./button";

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
        <Button id={1} name="References" setOpen={setOpen} />
        <Button id={2} name="Expirience" setOpen={setOpen} />
        <Button id={3} name="Education" setOpen={setOpen} />
        <Button id={4} name="Projects" setOpen={setOpen} />
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
