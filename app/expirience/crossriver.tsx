import styles from "../page.module.css";

export const Crossriver = () => {
  return (
    <div>
      <div className={styles.tag}>{`<section>`}</div>
      <div className={styles.indented}>
        <div className={styles.htmlComment}>{`<!-- 2022 - Present -->`}</div>

        <div>
          <span className={styles.tag}>{`<h1>`}</span>
          {`Frontend Architect`}
          <span className={styles.tag}>{`</h1>`}</span>
        </div>
        <div>
          <span className={styles.tag}>{`<h3>`}</span>
          {`Crossriver`}
          <span className={styles.tag}>{`</h3>`}</span>
        </div>

        <div className={styles.ul}>
          <div className={styles.tag}>{`<ul>`}</div>
          <div className={styles.indented}>
            <div className={styles.tag}>{`<li>`}</div>
            <div
              className={styles.indented}
            >{`Led the planning and development of a comprehensive shared React
            component library and framework. The framework serves as the
            foundation of our design system as it unifies the look and feel of
            the company's products, ensuring consistency and coherence in the
            user experience. It includes support for authentication, data
            fetching, routing, form management, state management, languages,
            analytics..., and greatly enhances development efficiency.`}</div>
            <div className={styles.tag}>{`</li>`}</div>

            <div className={styles.tag}>{`<li>`}</div>
            <div
              className={styles.indented}
            >{` Created an E2E Cypress testing library tightly coupled with the
          React framework, significantly reducing testing time while providing
          an intuitive interface for component selection and testing, and
          running common flows.`}</div>
            <div className={styles.tag}>{`</li>`}</div>

            <div className={styles.tag}>{`<li>`}</div>
            <div
              className={styles.indented}
            >{`Established standardized coding practices and styles with an
          emphasis on clean very clean code, allowing for developers to easily
          feel at home in any code base.`}</div>
            <div className={styles.tag}>{`</li>`}</div>

            <div className={styles.tag}>{`<li>`}</div>
            <div
              className={styles.indented}
            >{`Established close collaboration between development and design
          teams, ensuring alignment with design principles and user-centric
          goals.`}</div>
            <div className={styles.tag}>{`</li>`}</div>

            <div className={styles.tag}>{`<li>`}</div>
            <div
              className={styles.indented}
            >{`Served as a consultant to teams, performing code reviews, conducting
          workshops, classes, and one-on-one sessions to give over essential
          skills and knowledge.`}</div>
            <div className={styles.tag}>{`</li>`}</div>
          </div>
          <div className={styles.tag}>{`</ul>`}</div>
        </div>
      </div>
      <div className={styles.tag}>{`</section>`}</div>
    </div>
  );
};
