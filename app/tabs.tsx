"use client";

import { tabs } from "./constants/tabs";
import styles from "./page.module.css";

export const Tabs = ({ setTabOpen, tabOpen }: any) => {
  return (
    <div className={styles.tabs}>
      <div
        onClick={() => setTabOpen(tabs.Home)}
        className={`${styles.tab} ${tabOpen === tabs.Home ? "open" : ""}`}
      >
        <span
          style={{
            color: "#1973e8",
            fontSize: "18px",
            position: "absolute",
            left: "9px",
            top: "10px",
          }}
          className={`material-symbols-outlined html text-[24px}] text-primary`}
        >
          code
        </span>
        home.html
      </div>
      <div
        onClick={() => setTabOpen(tabs.Expirience)}
        className={`${styles.tab} ${tabOpen === tabs.Expirience ? "open" : ""}`}
      >
        <span
          style={{
            color: "#1973e8",
            fontSize: "18px",
            position: "absolute",
            left: "9px",
            top: "10px",
          }}
          className={`material-symbols-outlined html text-[24px}] text-primary`}
        >
          preview
        </span>
        expirience.html ~ preview
      </div>
      <div
        onClick={() => setTabOpen(tabs.References)}
        className={`${styles.tab} ${tabOpen === tabs.References ? "open" : ""}`}
      >
        <span
          style={{
            color: "#1973e8",
            fontSize: "18px",
            position: "absolute",
            left: "9px",
            top: "10px",
          }}
          className={`material-symbols-outlined html text-[24px}] text-primary`}
        >
          preview
        </span>
        references.html ~ preview
      </div>
      {/* <div
        onClick={() => setTabOpen(tabs.Education)}
        className={`${styles.tab} ${tabOpen === tabs.Education ? "open" : ""}`}
      >
        <span
          style={{
            color: "#1973e8",
            fontSize: "18px",
            position: "absolute",
            left: "9px",
            top: "10px",
          }}
          className={`material-symbols-outlined html text-[24px}] text-primary`}
        >
          code
        </span>
        education.html
      </div> */}
    </div>
  );
};
