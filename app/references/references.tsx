import styles from "../page.module.css";
import { EE } from "./elisheva-epstien";
import { EPhraim } from "./ephraim";
import { JK } from "./jon-kenton";
import { VN } from "./vlad-novik";

export const References = () => {
  return (
    <div>
      <div className={`${styles.expirienceContent} expirience`}>
        <EE />
        <VN />
        <JK />
        <EPhraim />
      </div>
    </div>
  );
};
