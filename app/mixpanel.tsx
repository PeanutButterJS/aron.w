"use client";

import { useEffect } from "react";
import { useMixpanel } from "./hooks/useMixpanel";

export const Mixpanel = () => {
  const mixpanel = useMixpanel();
  useEffect(() => {
    const token = "c01e49beecb155253258ef019cc2e854";

    mixpanel.initialize(token, {
      id: "11111",
      name: "Aron Weinraub",
    });
  }, []);
  return null;
};
