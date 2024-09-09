import Image from "next/image";
import styles from "./page.module.css";
import { Buttons } from "./buttons";

import { Fira_Code, Permanent_Marker } from "next/font/google";
import { ConsoleLog } from "./console-log";
import { GoogleA } from "./google-a";
import { Mixpanel } from "./mixpanel";

const fira = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});
const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${styles.main} ${fira.className} `}>
      <section className={styles.content}>
        <div className={styles.tag}>{`<body>`}</div>

        <div className={styles.indented}>
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
        </div>

        <Buttons />
        <div className={styles.script}>
          <div className={styles.tag}>{`<script>`}</div>
          <div
            className={styles.comment}
          >{`// check out the contact info in the console.`}</div>
          <span className={styles.consoleLog}>
            console.log(<span className={styles.contantInfo}>contactInfo</span>)
          </span>
          <div className={styles.tag}>{`</script>`}</div>
        </div>

        <div className={styles.tag}>{`</body>`}</div>
      </section>

      <ConsoleLog />
      <GoogleA />
      <Mixpanel />
    </main>
  );
}
