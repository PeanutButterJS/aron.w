import styles from "../page.module.css";

export const Matrix = () => {
  return (
    <div>
      <div className={styles.tag}>{`<section>`}</div>
      <div className={styles.indented}>
        <div className={styles.htmlComment}>{`<!-- 2014 - 2016 -->`}</div>

        <div>
          <span className={styles.tag}>{`<h1>`}</span>
          {`Software/Web Developer`}
          <span className={styles.tag}>{`</h1>`}</span>
        </div>
        <div>
          <span className={styles.tag}>{`<h3>`}</span>
          {`Israel Ministry of Finance`}
          <span className={styles.tag}>{`</h3>`}</span>
        </div>

        <div>
          <div className={styles.ul}>
            <div className={styles.tag}>{`<ul>`}</div>
            <div className={styles.indented}>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Development of a C#/ASP.Net/Web API/SQL-Server/AngularJS SPA.`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Worked in a team of 6 developers transforming a Visual-Basic 6 data management system with an Oracle/PLSQL database into an AngularJS Single Page Application with an SQL-Server database.`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Created many data interfaces using SSIS.`}</div>
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
