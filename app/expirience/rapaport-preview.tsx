import styles from "../page.module.css";

export const Rapaport = () => {
  return (
    <div className={styles.preview}>
      <h1 className={styles.h1}>
        Frontend Architect - Lead Frontend Developer{" "}
        <span className={styles.company}>Rapaport</span>
      </h1>
      <div className={styles.time}>2016 - 2022</div>
      <ul>
        <li className={styles.li}>
          {`Development of Rapaport Technologies’ flagship diamond trading platform “RapNet”.`}
        </li>
        <li
          className={styles.li}
        >{`Oversee, manage, and development of a ReactJs/Redux SPA.`}</li>
        <li className={styles.li}>
          {`Development of a C# .Net Core backend with a MicroService architecture and SQL Server and PostgresSql databases.`}
        </li>
        <li className={styles.li}>
          {`Lead the rewrite of AngularJs SPA into ReactJs resulting in substantial performance boosts and a smoother UX. `}
        </li>
        <li className={styles.li}>
          {`Created and maintain the bundling of a Micro Frontend architecture with Webpack and Module Federation to allow for a more performant and less dependent deployment (CI/CD) process.`}
        </li>
        <li className={styles.li}>
          {`Implement an extreme clean code policy with the help of ESLint, StyleLint, Prettier and strict code reviews.`}
        </li>
      </ul>
    </div>
  );
};
