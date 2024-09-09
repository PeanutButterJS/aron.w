import { Expirience } from "./expirience/expirience";
import styles from "./page.module.css";

import { Permanent_Marker } from "next/font/google";

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export const SidePanel = ({
  displayId,
  onClose,
}: {
  displayId: number | null;
  onClose: () => void;
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {/* <button className={styles.close} onClick={onClose}>
          &times;
        </button> */}
        {displayId === 1 && <div>these are my references</div>}
        {displayId === 2 && <Expirience />}
        {displayId === 3 && <div>these are my education</div>}
        {displayId === 4 && <div>these are my projects</div>}
        {displayId === 5 && (
          <div>
            <span className="material-symbols-outlined">call</span>
          </div>
        )}
      </div>
    </div>
  );
};
