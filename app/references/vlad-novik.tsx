import styles from "../page.module.css";

export const VN = () => {
  return (
    <div className={styles.preview}>
      <h1 className={styles.h1}>Vladmir Novik</h1>

      <div
        className={styles.time}
      >{`Software Architect, Consultant, Entrepreneur, Author, Worldwide speaker, Mentor`}</div>
      <div className={styles.referenceText}>
        <div className={styles.paragrapgh}>
          {`Aron is a really good developer and super fast learner. He has a good eye for details and is familiar with best coding practices which he uses on a daily basis. It was a pleasure working with Aron. I think he is a great asset to any team. `}
        </div>
      </div>
    </div>
  );
};
