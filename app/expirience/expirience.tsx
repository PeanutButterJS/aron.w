import styles from "../page.module.css";
import { Cingulant } from "./cingulant-preview";
import { Crossriver } from "./crossriver-preview";
import { Matrix } from "./matrix-preview";
import { Rapaport } from "./rapaport-preview";

import { Roboto } from "next/font/google";

const fira = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const Expirience = () => {
  return (
    <div>
      <div
        className={`${fira.className} ${styles.expirienceContent} expirience`}
      >
        <Crossriver />
        <Rapaport />
        <Matrix />
        <Cingulant />
      </div>
    </div>
  );
};
