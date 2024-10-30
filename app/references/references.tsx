import styles from "../page.module.css";
import { EE } from "./elisheva-epstien";
import { EPhraim } from "./ephraim";
import { JK } from "./jon-kenton";
import { VN } from "./vlad-novik";

import { Roboto } from "next/font/google";

const fira = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const References = () => {
  return (
    <div>
      <div
        className={`${fira.className} ${styles.expirienceContent} expirience`}
      >
        <EE />
        <VN />
        <JK />
        <EPhraim />
      </div>
    </div>
  );
};
