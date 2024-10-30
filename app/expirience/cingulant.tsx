import styles from "../page.module.css";

export const Cingulant = () => {
  return (
    <div>
      <div className={styles.tag}>{`<section>`}</div>
      <div className={styles.indented}>
        <div className={styles.htmlComment}>{`<!-- 2011 - 2014 -->`}</div>

        <div>
          <span className={styles.tag}>{`<h1>`}</span>
          {`Software/Web Developer`}
          <span className={styles.tag}>{`</h1>`}</span>
        </div>
        <div>
          <span className={styles.tag}>{`<h3>`}</span>
          {`Cingulant Software`}
          <span className={styles.tag}>{`</h3>`}</span>
        </div>

        <div>
          <div className={styles.ul}>
            <div className={styles.tag}>{`<ul>`}</div>
            <div className={styles.indented}>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Development and maintenance of C#/ASP.Net/MVC/SQL-Server data management systems for a number of large non-profit organizations`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Development and maintenance of ASP.Net/MVC web application, using SQL-Server and Linq to SQL to collect user data and generate reports used to study workplace related injuries.`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Development of a C# and Winforms application to reformat the printed version of the Koren Talmud to the IOS App version. Included extensive MySql and XML manipulation.`}</div>
              <div className={styles.tag}>{`</li>`}</div>
              <div className={styles.tag}>{`<li>`}</div>
              <div
                className={styles.indented}
              >{`Lead developer of Davka Corp's, Yom L’Yom the Jewish Calendar Maker, a C#/Winforms calendar/appointment maker.`}</div>
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
