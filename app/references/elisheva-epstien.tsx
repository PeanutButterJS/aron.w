import styles from "../page.module.css";

export const EE = () => {
  return (
    <div>
      <div className={styles.tag}>{`<section>`}</div>
      <div className={styles.indented}>
        <div>
          <span className={styles.tag}>{`<h1>`}</span>
          {`Elisheva Epstein`}
          <span className={styles.tag}>{`</h1>`}</span>
          <div
            className={styles.htmlComment}
          >{`<!-- Director of Engineering | 0 to Scale | Technology Strategy & Execution | Measurable Business Outcomes -->`}</div>
          <br />
        </div>

        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`I had the pleasure of working with Aron, and it’s hard to overstate his impact on UI development at Cross River. Since joining, Aron completely transformed our approach to building user interfaces. Early on, he identified the need for a comprehensive UI library that could serve all teams, and he took it upon himself to lead that initiative. Through his tireless efforts, Aron not only built the library but also fostered a thriving internal community that embraced and contributed to its continuous evolution, ensuring it aligned with the latest industry trends.`}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`Aron’s determination and attention to detail are truly remarkable. He has a clear vision for what needs to be done and works diligently to bring that vision to life. His cross-team collaboration and stakeholder communication are unparalleled. He has a unique ability to foresee the future needs of his team, always staying one step ahead in planning and execution.`}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
        <div className={styles.tag}>{`<p>`}</div>
        <div className={styles.indented}>
          {`Above all, Aron brings humility, teamwork, and creativity to everything he does. His leadership and collaborative spirit inspire growth in everyone around him, making him an invaluable asset to any team.`}
        </div>
        <div className={styles.tag}>{`</p>`}</div>
      </div>
      <div className={styles.tag}>{`</section>`}</div>
    </div>
  );
};
