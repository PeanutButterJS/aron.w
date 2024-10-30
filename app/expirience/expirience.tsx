import styles from "../page.module.css";
import { Cingulant } from "./cingulant";
import { Crossriver } from "./crossriver";
import { Matrix } from "./matrix";
import { Rapaport } from "./rapaport";

export const Expirience = () => {
  return (
    <div>
      <div className={`${styles.expirienceContent} expirience`}>
        <Crossriver />
        <Rapaport />
        <Matrix />
        <Cingulant />
      </div>
    </div>
  );
};
