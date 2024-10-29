"use client";

import { useGa } from "./hooks/useGA";
import { useMixpanel } from "./hooks/useMixpanel";
import styles from "./page.module.css";

export const Button = ({ id, setTabOpen }: { id: string; setTabOpen: any }) => {
  const { sendEvent } = useGa();
  const { trackEvent } = useMixpanel();

  const click = () => {
    setTabOpen(id);
    sendEvent({ eventName: "BUTTON_CLICK", label: name });
    trackEvent({ eventName: "BUTTON_CLICK", label: name });
  };

  return (
    <button onClick={() => click()} className={styles.button}>
      <span className={styles.tag}>{`<button>`}</span>
      <span>{id}</span>
      <span className={styles.tag}>{`</button>`}</span>
    </button>
  );
};
