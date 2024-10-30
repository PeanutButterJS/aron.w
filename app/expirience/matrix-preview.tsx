import styles from "../page.module.css";

export const Matrix = () => {
  return (
    <div className={styles.preview}>
      <h1 className={styles.h1}>
        Software/Web Developer{" "}
        <span className={styles.company}>Israel Ministry of Finance</span>
      </h1>
      <div className={styles.time}>2014 - 2016</div>
      <ul>
        <li className={styles.li}>
          {`Development of a C#/ASP.Net/Web API/SQL-Server/AngularJS SPA.`}
        </li>
        <li
          className={styles.li}
        >{`Worked in a team of 6 developers transforming a Visual-Basic 6 data management system with an Oracle/PLSQL database into an AngularJS Single Page Application with an SQL-Server database.`}</li>
        <li className={styles.li}>
          {`Created many data interfaces using SSIS.`}
        </li>
      </ul>
    </div>
  );
};
