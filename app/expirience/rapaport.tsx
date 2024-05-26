import styles from "../page.module.css";

export const Rapaport = () => {
  return (
    <div className={styles.expirienceWrapper}>
      <span className={styles.year}>2016 - 2022</span>
      <div>
        <div className={`${styles.expirience}`}>
          <span>Frontend Architect - Lead Frontend Developer</span>

          <span className={styles.company}>Rapaport</span>
        </div>
        Development of Rapaport Technologies’ flagship diamond trading platform
        “RapNet”. Overseeing ReactJs/Redux frontend stack as well as development
        of a .Net Core microservice architecture on the backend. Lead the
        rewrite of AngularJs SPA into ReactJs resulting in substantial
        performance boosts and a smoother UX.
        <div className={styles.include}>Other responsibilities include:</div>
        <ul className={styles.list}>
          <li>{`
           code review through pull requests and implementing an extreme "clean code" policy
            `}</li>

          <li>managing outsourced elements of the team</li>
          <li>setting up project architecture</li>
          <li>production releases</li>
          <li>frontend development training and advising</li>
        </ul>
      </div>
    </div>
  );
};
