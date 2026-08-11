import { motion } from "framer-motion";

export default function Card({ children, className = "", ...props }) {
  return (
    // keep transition smooth and subtle for a nice hover effect currently too jagged
    <motion.div
      whileHover={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.3 }}
      className={["bg-white/5 backdrop-blur p-2 rounded-2xl shadow-lg", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </motion.div>
  );
}