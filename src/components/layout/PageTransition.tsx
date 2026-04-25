import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
