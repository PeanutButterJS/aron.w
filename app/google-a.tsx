"use client";

import reactGa from "react-ga4";

import { useEffect } from "react";

export const GoogleA = () => {
  useEffect(() => {
    const trackingId = "G-8MX8B7Q3XL";

    reactGa.initialize(trackingId);
    reactGa.send({ hitType: "pageview", page: "/home", title: "Home Page" });
  }, []);
  return null;
};
