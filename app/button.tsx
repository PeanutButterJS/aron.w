"use client";

import { useGa } from "./hooks/useGA";
import { useMixpanel } from "./hooks/useMixpanel";
import styles from "./page.module.css";

export const Button = ({
  id,
  name,
  setOpen,
}: {
  id: number;
  name: string;
  setOpen: (id: number) => void;
}) => {
  const { sendEvent } = useGa();
  const { trackEvent } = useMixpanel();

  const click = () => {
    setOpen(id);
    sendEvent({ eventName: "BUTTON_CLICK", label: name });
    trackEvent({ eventName: "BUTTON_CLICK", label: name });
  };

  return (
    <button onClick={() => click()} className={styles.button}>
      <span className={styles.tag}>{`<button>`}</span>
      <span>{name}</span>
      <span className={styles.tag}>{`</button>`}</span>
    </button>
  );
};
