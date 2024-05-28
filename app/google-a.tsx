"use client";

import { useEffect } from "react";
import { useGa } from "./hooks/useGA";

export const GoogleA = () => {
  const ga = useGa();
  useEffect(() => {
    const trackingId = "G-8MX8B7Q3XL";
    ga.initialize(trackingId);
  }, []);
  return null;
};
