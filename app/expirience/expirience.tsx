import styles from "../page.module.css";
import { Crossriver } from "./crossriver";
import { Rapaport } from "./rapaport";

export const Expirience = () => {
  return (
    <div>
      <div className={`${styles.expirienceContent} expirience`}>
        <Crossriver />
        <Rapaport />
        {/*   <Crossriver />
        <Crossriver /> */}
      </div>
    </div>
  );
};
