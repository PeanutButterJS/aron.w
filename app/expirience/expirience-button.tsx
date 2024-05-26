import styles from "../page.module.css";

export const ExpirienceButton = ({
  id,
  setId,
  currentId,
  position,
  years,
  company,
}: {
  id: number;
  currentId: number;
  setId: (val: number) => void;
  position: string;
  years: string;
  company: string;
}) => {
  return (
    <button
      onClick={() => setId(id)}
      className={`${styles.expirience} ${currentId === id ? "clicked" : ""} `}
    >
      <span>{position}</span>
      <span className={styles.year}>{years}</span>
      <span className={styles.company}>{company}</span>
    </button>
  );
};
