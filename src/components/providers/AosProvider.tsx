"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 80,
      easing: "ease",
      disable: false,
    });
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
