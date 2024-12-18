import styles from "../page.module.css";

export const Rapaport = () => {
  return (
    <div>
      <div className={styles.tag}>{`<section>`}</div>
      <div className={styles.indented}>
        <div className={styles.htmlComment}>{`<!-- 2016 - 2022 -->`}</div>

        <div>
          <span className={styles.tag}>{`<h1>`}</span>
          {`Frontend Architect - Lead Frontend Developer`}
          <span className={styles.tag}>{`</h1>`}</span>
        </div>
        <div>
          <span className={styles.tag}>{`<h3>`}</span>
          {`Rapaport`}
          <span className={styles.tag}>{`</h3>`}</span>
        </div>

        <div>
          <div className={styles.ul}>
            <div className={styles.tag}>{`<ul>`}</div>
            <div className={styles.indented}>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Development of Rapaport Technologies’ flagship diamond trading platform “RapNet”.`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Oversee, manage, and development of a ReactJs/Redux SPA.`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Development of a C# .Net Core backend with a MicroService architecture and SQL Server and PostgresSql databases.`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Lead the rewrite of AngularJs SPA into ReactJs resulting in substantial performance boosts and a smoother UX. `}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Created and maintain the bundling of a Micro Frontend architecture with Webpack and Module Federation to allow for a more performant and less dependent deployment (CI/CD) process.`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Implement an extreme clean code policy with the help of ESLint, StyleLint, Prettier and strict code reviews.`}</div>
              <div className={styles.tag}>{`</li>`}</div>
            </div>
            <div className={styles.tag}>{`</ul>`}</div>
          </div>
        </div>
      </div>
      <div className={styles.tag}>{`</section>`}</div>
    </div>
  );
};
