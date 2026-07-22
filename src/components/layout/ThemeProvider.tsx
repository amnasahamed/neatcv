"use client";

import { useEffect } from "react";

export function ThemeProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("neatcv-theme");

    if (stored === "dark" || stored === "light") {
      root.dataset.theme = stored;
    } else {
      root.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }
  }, []);

  return null;
}
