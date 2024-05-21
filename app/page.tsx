import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/code.jpg"
        alt="code"
        width={100}
        height={100}
        className={styles.backgroundImage}
        priority
      />
      <div className={styles.background}>
        <div className={styles.heading}>Aron Weinraub</div>
        <div className={styles.description}>Frontend Architect</div>
        <div className={styles.description2}>
          Excelling in great DX without compromizing on UX
        </div>
      </div>
    </main>
  );
}
