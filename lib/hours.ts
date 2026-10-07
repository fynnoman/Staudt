"use client";

import { useEffect, useState } from "react";

export function useNowSaarlouis() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

export function isOpen(d: Date): boolean {
  const day = d.getDay(); // 0 Su .. 6 Sa
  const h = d.getHours();
  const m = d.getMinutes();
  const t = h * 60 + m;
  if (day === 0) return false; // Sunday closed
  if (day >= 1 && day <= 5) {
    return (t >= 480 && t < 720) || (t >= 780 && t < 1020); // 08–12, 13–17
  }
  return false; // Saturday: nach Vereinbarung
}

export function nextOpenLabel(d: Date): string {
  const day = d.getDay();
  const h = d.getHours();
  const m = d.getMinutes();
  const t = h * 60 + m;

  if (day >= 1 && day <= 5) {
    if (t < 480) return "öffnet um 8:00";
    if (t >= 720 && t < 780) return "öffnet um 13:00";
    if (t >= 1020) {
      if (day === 5) return "öffnet Mo. 8:00";
      return "öffnet morgen 8:00";
    }
  }
  if (day === 6) return "nach Vereinbarung";
  if (day === 0) return "öffnet Mo. 8:00";
  return "geschlossen";
}
