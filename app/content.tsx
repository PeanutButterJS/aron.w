"use client";
import styles from "./page.module.css";
import { Buttons } from "./buttons";
import { Tabs } from "./tabs";
import { useEffect, useState } from "react";
import { tabs } from "./constants/tabs";
import { Expirience } from "./expirience/expirience";
import { References } from "./references/references";

export const Content = () => {
  const [tabOpen, setTabOpen] = useState<string | null>(tabs.Home);

  return (
    <>
      <Tabs tabOpen={tabOpen} setTabOpen={setTabOpen} />
      {tabOpen === tabs.Home && (
        <section className={styles.content}>
          <div className={styles.tag}>{`<body>`}</div>
          <div className={styles.indented}>
            <>
              <div>
                <span className={styles.tag}>{`<h1>`}</span>
                {`Aron Weinraub`}
                <span className={styles.tag}>{`</h1>`}</span>
              </div>
              <div>
                <span className={styles.tag}>{`<h2>`}</span>
                {`Frontend Architect`}
                <span className={styles.tag}>{`</h2>`}</span>
              </div>
              <div>
                <div className={styles.tag}>{`<p>`}</div>
                <span className={styles.indented}>
                  {`Great `}
                  <span>{`DX`}</span>
                  <span>{` with uncompromising `}</span>
                  <span>{` UX`}</span>
                </span>
                <div className={styles.tag}>{`</p>`}</div>
              </div>

              <Buttons setTabOpen={setTabOpen} tabOpen={tabOpen} />
              <div className={styles.script}>
                <div className={styles.tag}>{`<script>`}</div>
                <div
                  className={styles.comment}
                >{`// React | NextJs | Redux | Typescript | Module Federation | Cypress | Playwright | Agile`}</div>
                <div
                  className={styles.comment}
                >{`// Fast, reliable, and quality delivery.`}</div>
                <div className={styles.comment}>{`// Squeaky clean code!`}</div>
                <br />
                <br />
                <div
                  className={styles.comment}
                >{`// Check out my contact info in the console.`}</div>
                <span className={styles.consoleLog}>
                  console.log(
                  <span className={styles.contantInfo}>contactInfo</span>)
                </span>
                <div className={styles.tag}>{`</script>`}</div>
              </div>
            </>
          </div>
          <div className={styles.tag}>{`</body>`}</div>
        </section>
      )}
      {tabOpen === tabs.References && <References />}
      {tabOpen === tabs.Expirience && <Expirience />}
    </>
  );
};
