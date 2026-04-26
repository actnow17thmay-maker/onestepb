import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const scrollToTop = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenis = (window as any).__lenis as Lenis | undefined;
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
  }
};

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = () => window.innerWidth < 768;

    function init() {
      if (prefersReduced || isMobile()) return;
      lenisRef.current = new Lenis({ autoRaf: true });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__lenis = lenisRef.current;
    }

    function destroy() {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).__lenis;
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
