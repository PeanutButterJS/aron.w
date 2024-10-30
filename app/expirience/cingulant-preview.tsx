import styles from "../page.module.css";

export const Cingulant = () => {
  return (
    <div className={styles.preview}>
      <h1 className={styles.h1}>
        Software/Web Developer{" "}
        <span className={styles.company}>Cingulant Software</span>
      </h1>
      <div className={styles.time}>2011 - 2014</div>
      <ul>
        <li className={styles.li}>
          {`Development and maintenance of C#/ASP.Net/MVC/SQL-Server data management systems for a number of large non-profit organizations`}
        </li>
        <li
          className={styles.li}
        >{`Development and maintenance of ASP.Net/MVC web application, using SQL-Server and Linq to SQL to collect user data and generate reports used to study workplace related injuries.`}</li>
        <li className={styles.li}>
          {`Development of a C# and Winforms application to reformat the printed version of the Koren Talmud to the IOS App version. Included extensive MySql and XML manipulation.`}
        </li>
        <li className={styles.li}>
          {`Lead developer of Davka Corp's, Yom L’Yom the Jewish Calendar Maker, a C#/Winforms calendar/appointment maker.`}
        </li>
      </ul>
    </div>
  );
};
