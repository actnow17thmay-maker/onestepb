import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = () => window.innerWidth < 768;

    function init() {
      if (prefersReduced || isMobile()) return;
      lenisRef.current = new Lenis({ autoRaf: true });
    }

    function destroy() {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    }

    init();

    const onResize = () => {
      if (isMobile()) {
        destroy();
      } else if (!lenisRef.current && !prefersReduced) {
        init();
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      destroy();
    };
  }, []);

  return <>{children}</>;
}
