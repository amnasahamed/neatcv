"use client";

import { useEffect } from "react";

export function ThemeProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("neatcv-theme");

    root.dataset.theme = stored === "dark" ? "dark" : "light";
  }, []);

  return null;
}
