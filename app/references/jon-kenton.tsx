import styles from "../page.module.css";

export const JK = () => {
  return (
    <div>
      <div className={styles.tag}>{`<section>`}</div>
      <div className={styles.indented}>
        <div>
          <span className={styles.tag}>{`<h1>`}</span>
          {`Jonathan Kenton`}
          <span className={styles.tag}>{`</h1>`}</span>
          <div
            className={styles.htmlComment}
          >{`<!-- Frontend Engineer and Accessibility Champ @Microsoft -->`}</div>
          <br />
        </div>

        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`Wow! I've never found anyone such a pleasure to work with as Aron. Perfect balance of side-splitting humor and high standards that make every day pure joy. Can't recommend him more for any Programming role and especially learned a lot from his Front End expertise and insight. He is the one to go to for any Front End questions, from inital architecture to pixel-pefect finishing touches for any project, from scratch or existing. You won't find better than Aron.`}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
      </div>
      <div className={styles.tag}>{`</section>`}</div>
    </div>
  );
};
