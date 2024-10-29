"use client";

import styles from "./page.module.css";
import { Fira_Code } from "next/font/google";
import { Button } from "./button";
import { tabs } from "./constants/tabs";

const fira = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});

export const Buttons = ({ setTabOpen, tabOpen }: any) => {
  return (
    <>
      <div className={`${fira.className} ${styles.buttons}`}>
        <Button setTabOpen={setTabOpen} id={tabs.Expirience} />
        <Button setTabOpen={setTabOpen} id={tabs.References} />
        <Button setTabOpen={setTabOpen} id={tabs.Education} />
      </div>
    </>
  );
};
