import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Icon from "../assets/Sign-Logo/minisign.svg?react";

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
   <motion.div
  initial={{ y: 0 }}
  exit={{ y: "-100vh" }}
  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
  // Use your exact brand background colors here
  className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#f2ebeb] dark:bg-[#0a0a0a] text-neutral-900 dark:text-white transition-colors duration-300"
>
      <div className="relative flex flex-col items-center">
        {/* 1. Logo with Synchronized Halo Animation */}
        <div
          className="relative w-20 h-20 mb-10 flex items-center justify-center text-indigo-600 dark:text-indigo-400"
        >
          {/* A. The "Halo" Glow (Background Element) */}
          <div
          
            className="absolute -inset-4 rounded-full bg-indigo-500/30 blur-[20px] dark:blur-[30px] z-0 pointer-events-none"
          />

          {/* B. The Actual Icon (Foreground Element) */}
          <Icon className="w-full h-full fill-current relative z-10" />
        </div>

        {/* 2. Percentage Counter */}
        {/* <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic select-none">
          {progress}
          <span className="text-indigo-600 dark:text-indigo-400">%</span>
        </h1> */}

        {/* 3. Progress Bar Container */}
        <div className="w-56 h-[4px] bg-neutral-200 dark:bg-white/10 mt-8 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div> 

        {/* 4. Terminal Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-indigo-600 dark:text-indigo-400 font-mono font-bold">
            // Executing Main_Portfolio.sh
          </p>
          {/* <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-1 h-1 bg-emerald-500 rounded-full"
              />
            ))}
          </div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
