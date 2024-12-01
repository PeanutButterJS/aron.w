import styles from "../page.module.css";

export const Crossriver = () => {
  return (
    <div className={styles.preview}>
      <h1 className={styles.h1}>
        Frontend Architect <span className={styles.company}>Crossriver</span>
      </h1>
      <div className={styles.time}>2022 - Present</div>
      <ul>
        <li
          className={styles.li}
        >{`Led the planning and development of a comprehensive shared React
            component library and framework. The framework serves as the
            foundation of our design system as it unifies the look and feel of
            the company's products, ensuring consistency and coherence in the
            user experience. It includes support for authentication, data
            fetching, routing, form management, state management, languages,
            analytics..., and greatly enhances development efficiency.`}</li>
        <li
          className={styles.li}
        >{`Created an E2E Cypress testing library tightly coupled with the
          React framework, significantly reducing testing time while providing
          an intuitive interface for component selection and testing, and
          running common flows.`}</li>
        <li
          className={styles.li}
        >{`Established standardized coding practices and styles with an
          emphasis on very clean code, allowing for developers to easily
          feel at home in any code base.`}</li>
        <li
          className={styles.li}
        >{`Established close collaboration between development and design
          teams, ensuring alignment with design principles and user-centric
          goals.`}</li>
        <li
          className={styles.li}
        >{`Served as a consultant to teams, performing code reviews, conducting
          workshops, classes, and one-on-one sessions to give over essential
          skills and knowledge.`}</li>
      </ul>
    </div>
  );
};
