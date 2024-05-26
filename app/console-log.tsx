"use client";

import { useEffect } from "react";

export const ConsoleLog = () => {
  useEffect(() => {
    console.log(
      `%c If your looking for some great frontend consulting feel free to reach out at aeweinraub@gmail.com. `,
      "background: #13212E; color: #f92672; padding: 20px 10px; font-size: 16px;"
    );
  }, []);
  return null;
};
