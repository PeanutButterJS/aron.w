import styles from "../page.module.css";

export const EPhraim = () => {
  return (
    <div>
      <div className={styles.tag}>{`<section>`}</div>
      <div className={styles.indented}>
        <div>
          <span className={styles.tag}>{`<h1>`}</span>
          {`Ephraim Eitam`}
          <span className={styles.tag}>{`</h1>`}</span>
          <div
            className={styles.htmlComment}
          >{`<!-- Development Team Lead @Takeaway.com -->`}</div>
          <br />
        </div>

        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`An extremely talented and brilliant hands-on architect mainly in the frontend area but also with a deep understanding of backend coding and processes. always up to date with the latest technologies and leads safely our huge frontend ship in the turbulent water of the JavaScript libraries.
pedant, a perfectionist, organized, never missing even the smallest piece of the code while always keeping the big picture in mind.`}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`Delivery is Aron's second name. He delivers, on time, large systems with very high-performance requirements and complex UI. as a manager, I can be sure that once Aron steps in, I can turn my back and everything will be ready on time with very high quality.`}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`Aron has also very good managerial skills. he managed professionally frontend developers from four teams in two countries.`}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`But above all, it is his personality. He always calms with a big smile, funny with a very unique and special sense of humor. if you ever had a dream to write git commands in Yiddish you can try to download his npm git shabis library.`}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`Aron is a perfect colleague and a real friend. it's an honor and pleasure to work with him. Doesn't matter where I will be or what position I will have, I'll always be more than happy to see him next to me`}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
      </div>
      <div className={styles.tag}>{`</section>`}</div>
    </div>
  );
};