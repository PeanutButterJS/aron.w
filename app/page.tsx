"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Buttons } from "./buttons";

import { Fira_Code, Permanent_Marker } from "next/font/google";
import { ConsoleLog } from "./console-log";
import { GoogleA } from "./google-a";
import { Mixpanel } from "./mixpanel";
import localFont from "next/font/local";
import { use } from "react";
import { useMixpanel } from "./hooks/useMixpanel";

const fira = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});
const whiteboardFont = localFont({
  src: "./DryWhiteboardMarker-Regular.ttf",
  display: "swap",
  variable: "--whiteboard-font",
});
/* const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
}); */

export default function Home() {
  const mixPanel = useMixpanel();
  const handleClick = (e: any) => {
    console.log("Right click");
    mixPanel.trackEvent({
      eventName: "Right click",
      label: "Right click",
      whatDidHeDo: "found my contact info",
    });
  };

  return (
    <main
      className={`${styles.main}  ${fira.className} `}
      onClick={handleClick}
    >
      <div className={`${whiteboardFont.className}`}>
        <div className={styles.whiteBoard}>
          <div className={styles.topOfBoard}>
            <div className={styles.title}>Aron Weinraub</div>
            <div className={styles.secondaryLine}>Frontend Architect</div>
            <div className={styles.saying}>
              Great <span className={styles.sayingSpecial}>DX</span> with
              uncompromising <span className={styles.sayingSpecial}>UX</span>.
            </div>

            <Buttons />
          </div>
        </div>
      </div>

      {/*  <div className={styles.tag}>{`<body>`}</div>

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
            <span className={styles.tag}>{`<i>`}</span>
            <span>{`DX`}</span>
            <span className={styles.tag}>{`</i>`}</span>
            <span>{` with uncompromising `}</span>
            <span className={styles.tag}>{`<i>`}</span>
            <span>{` UX`}</span>
            <span className={styles.tag}>{`</i>`}</span>
          </span>
          <div className={styles.tag}>{`</p>`}</div>
        </div>
        <div>
          <Buttons />
        </div>
      </div>
      <div className={styles.script}>
        <div className={styles.tag}>{`<script>`}</div>
        <div
          className={styles.comment}
        >{`// check out the contact info in the console.`}</div>
        <span className={styles.consoleLog}>console.log(contactInfo)</span>
        <div className={styles.tag}>{`</script>`}</div>
      </div>

      <div className={styles.tag}>{`</body>`}</div> */}

      <ConsoleLog />
      <GoogleA />
      <Mixpanel />
    </main>
  );
}
