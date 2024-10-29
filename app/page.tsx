import styles from "./page.module.css";

import { Fira_Code, Permanent_Marker } from "next/font/google";
import { ConsoleLog } from "./console-log";
import { GoogleA } from "./google-a";
import { Mixpanel } from "./mixpanel";
import { Content } from "./content";

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
      <Content />

      <ConsoleLog />
      <GoogleA />
      <Mixpanel />
    </main>
  );
}
