import { motion } from "framer-motion"

export default function BgCard({ children }) {
  return (
    <motion.div
             className=" flex flex-1 py-10 sm:py-10 md:py-30 lg:py-40 border-t border-neutral-800 border rounded-3xl collab-bg grain-overlay overflow-hidden relative"
             style={{
               backgroundImage: `url(${data.cta.image})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
             }}
           >
      {children}
    </motion.div>
  )
}