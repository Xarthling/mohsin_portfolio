import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "px-5 py-2.5 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-400";
  const variants = {
    primary:
      "bg-indigo-600 text-md sm:text-md md:text-lg  text-white hover:bg-indigo-500 shadow-md hover:shadow-lg",
    outline:
      "border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-800/40",
    glass:
      "bg-white/10 backdrop-blur-lg border border-white/20 text-indigo-600 dark:text-indigo-400 hover:bg-white/20 dark:hover:bg-gray-800/40",
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 10px #8961e0ff/50" }}
      className={`${base} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
