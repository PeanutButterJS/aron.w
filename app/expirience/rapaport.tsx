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
          <div className={styles.tag}>{`<p>`}</div>
          <div
            className={styles.indented}
          >{`Development of Rapaport Technologies’ flagship diamond trading platform
          “RapNet”. Overseeing ReactJs/Redux frontend stack as well as development
          of a .Net Core microservice architecture on the backend. Lead the
          rewrite of AngularJs SPA into ReactJs resulting in substantial
          performance boosts and a smoother UX.`}</div>
          <div className={styles.tag}>{`<p>`}</div>
          <div>
            <span className={styles.tag}>{`<p>`}</span>
            <span>Other responsibilities include:</span>
            <span className={styles.tag}>{`</p>`}</span>
          </div>
          <div className={styles.ul}>
            <div className={styles.tag}>{`<ul>`}</div>
            <div className={styles.indented}>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`code review through pull requests and implementing an extreme "clean code" policy`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`managing outsourced elements of the team`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`setting up project architecture`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div className={styles.indented}>{`production releases`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`frontend development training and advising`}</div>
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
