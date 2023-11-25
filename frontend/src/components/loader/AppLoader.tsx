import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function AppLoadingState({ isLoading }: { isLoading: boolean }) {
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLoading]);

  if (!isLoading) return;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-80 z-50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex justify-center items-center w-[200px] rounded h-1 bg-color-gray relative overflow-hidden z-80"
        >
          <div
            className="h-full w-[50px] rounded bg-primary-400 absolute left-0 animate-loading-bar"
            style={{ width: "100%" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AppLoadingState;
