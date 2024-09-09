"use client";

import mixpanel from "mixpanel-browser";

import { useEffect } from "react";

export const Mixpanel = () => {
  useEffect(() => {
    const token = "c01e49beecb155253258ef019cc2e854";

    mixpanel.init(token, {
      debug: false,
      track_pageview: true,
      persistence: "localStorage",
    });
    mixpanel.identify("11111");
    mixpanel.people.set({ $name: "Aron Weinraub" });
  }, []);
  return null;
};
