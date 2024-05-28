"use client";

import { Permanent_Marker } from "next/font/google";
import { useGa } from "./hooks/useGA";
import { useMixpanel } from "./hooks/useMixpanel";
import styles from "./page.module.css";
import localFont from "next/font/local";

const whiteboardFont = localFont({
  src: "./DryWhiteboardMarker-Regular.ttf",
  display: "swap",
  variable: "--whiteboard-font",
});

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
    <button
      onClick={() => click()}
      className={`${whiteboardFont.className} ${styles.button}`}
    >
      {/*    <span className={styles.tag}>{`<button>`}</span> */}
      <span>{name}</span>
      {/*   <span className={styles.tag}>{`</button>`}</span> */}
    </button>
  );
};
