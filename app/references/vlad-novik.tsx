import styles from "../page.module.css";

export const VN = () => {
  return (
    <div>
      <div className={styles.tag}>{`<section>`}</div>
      <div className={styles.indented}>
        <div>
          <span className={styles.tag}>{`<h1>`}</span>
          {`Vladmir Novik`}
          <span className={styles.tag}>{`</h1>`}</span>
          <div
            className={styles.htmlComment}
          >{`<!-- Software Architect, Consultant, Entrepreneur, Author, Worldwide speaker, Mentor -->`}</div>
          <br />
        </div>

        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`Aron is a really good developer and super fast learner. He has a good eye for details and is familiar with best coding practices which he uses on a daily basis. It was a pleasure working with Aron. I think he is a great asset to any team. `}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
      </div>
      <div className={styles.tag}>{`</section>`}</div>
    </div>
  );
};
