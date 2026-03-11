import { motion } from "framer-motion"

export default function Card({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/5 backdrop-blur p-2 rounded-2xl shadow-lg"
    >
      {children}
    </motion.div>
  )
}