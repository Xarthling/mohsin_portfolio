import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import data from "../utils/data.json";

// Animation Variants for the Grid Container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// Animation Variants for individual Cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

const BentoExperience = () => {
  const { experience, education } = data;

  return (
    <SectionWrapper id="experience" className="py-20 bg-[#f8f5f5] dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading">
            Career & Education
          </h2>
        </motion.div>

        {/* 12-Column Grid with Framer Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[200px] md:auto-rows-[150px]"
        >
          {/* Tiles with specific spans */}
          <motion.div variants={cardVariants} className="md:col-span-8 md:row-span-2">
            <BentoCard item={experience[0]} type="experience" featured />
          </motion.div>

          <motion.div variants={cardVariants} className="md:col-span-4 md:row-span-3">
            <BentoCard item={education[0]} type="education" />
          </motion.div>

          <motion.div variants={cardVariants} className="md:col-span-4 md:row-span-2">
            <BentoCard item={experience[2]} type="experience" />
          </motion.div>

          <motion.div variants={cardVariants} className="md:col-span-4 md:row-span-1">
            <BentoCard item={education[1]} type="education" />
          </motion.div>

          <motion.div variants={cardVariants} className="md:col-span-5 md:row-span-2">
            <BentoCard item={experience[1]} type="experience" />
          </motion.div>

          <motion.div variants={cardVariants} className="md:col-span-3 md:row-span-2">
            <BentoCard item={education[2]} type="education" />
          </motion.div>

          <motion.div variants={cardVariants} className="md:col-span-4 md:row-span-1">
            <BentoCard item={experience[3]} type="experience" compact />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

const BentoCard = ({ item, type, featured, compact }) => {
  if (!item) return null;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        group relative h-full w-full p-8 rounded-[2.5rem] border overflow-hidden flex flex-col justify-between cursor-default
        ${featured 
          ? " bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl border-indigo-400 " 
          : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl"
        }
      `}
    >
      {/* Dynamic Watermark Animation */}
      <motion.img 
        src={item.img} 
        alt="" 
        initial={{ opacity: 0.05, rotate: -10 }}
        whileHover={{ opacity: 0.15, rotate: 0, scale: 1.1 }}
        className="absolute -bottom-4 -right-4 w-32 h-32 object-contain grayscale pointer-events-none"
      />

      <div className="flex justify-between items-start z-10">
        <div className={`
          w-14 h-14 rounded-2xl flex items-center justify-center shadow-md overflow-hidden bg-white
          ${featured ? "ring-4 ring-indigo-300/20" : "border border-neutral-100"}
        `}>
          <img src={item.img} alt="" className="w-10 h-auto mb-1 object-contain group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="flex flex-col items-end">
          <span className={`text-[11px] font-bold uppercase tracking-[0.2em]  text-emerald-400`}>
            {item.year}
          </span>
          {featured && <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold mt-1 uppercase">Present</span>}
        </div>
      </div>

      <div className="z-10">
        <h3 className={`font-bold leading-[1.1] text-xl my-1  text-neutral-900 dark:text-white`}>
          {item.role || item.degree}
        </h3>
        {!compact && (
          <p className={`mt-3 text-sm md:text-base font-medium leading-relaxed text-neutral-500 dark:text-neutral-400`}>
            {item.details || item.institution}
          </p>
        )}
      </div>

      {/* Shine Effect Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 transition-opacity duration-700" />
    </motion.div>
  );
};

export default BentoExperience;