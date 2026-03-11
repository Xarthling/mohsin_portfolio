import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import data from "../utils/data.json";
import SectionWrapper from "../components/SectionWrapper";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiServer,
  FiBarChart,
} from "react-icons/fi";
import { FaPython, FaReact, FaFlask, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFastapi,
  SiDjango,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiMysql,
  SiPostgresql,
  SiFigma,
  SiCanva,
  SiGooglecolab,
  SiPlotly,
  SiLaravel, 
  SiPhp
} from "react-icons/si";

import AzureIcon from "../assets/skills/Azure-Light.svg?react";
import YoloIcon from "../assets/skills/yolo.svg?react";
import CursorIcon from "../assets/skills/cursor.svg?react";
import Icon from "../assets/Sign-Logo/minisign.svg?react";

import CardSwap, { Card } from "../components/CardSwap";

// ────────────────────────────────────────────────
//  Icon mapping (centralized, easier to maintain)
// ────────────────────────────────────────────────
const iconMap = {
  Python: <FaPython />,
  JavaScript: <SiJavascript />,
  Cursor: <CursorIcon className="w-full h-full fill-current" />,
  SQL: <FiDatabase />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  React: <FaReact />,
  "Power BI": <FiBarChart />,
  FastAPI: <SiFastapi />,
  Django: <SiDjango />,
  Flask: <FaFlask />,
  Tailwind: <SiTailwindcss />,
  Azure: <AzureIcon className="w-full h-full fill-current" />,
  Ultralytics: <YoloIcon className="w-full h-full fill-current" />,
  TensorFlow: <SiTensorflow />,
  "Scikit-learn": <SiScikitlearn />,
  Laravel: <SiLaravel />,
  PHP: <SiPhp />,
  Keras: <SiKeras />,
  Matplotlib: <SiPlotly />,
  "Google Colab": <SiGooglecolab />,
  Git: <FaGitAlt />,
  "GitHub Copilot": <FaGithub />,
  "VS Code": <FiCode />,
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
  Figma: <SiFigma />,
  Canva: <SiCanva />,
};

const fallbackIcon = <FiCpu />;

// ────────────────────────────────────────────────
//  Skill stacks configuration (cleaner structure)
// ────────────────────────────────────────────────
const skillStacks = [
  {
    category: "Programming Languages",
    color: "from-blue-600 to-indigo-600",
    icon: <FiCode className="w-10 h-10 text-emerald-500" />,
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS","PHP"],
  },
  {
    category: "Frontend",
    color: "from-cyan-600 to-teal-600",
    icon: <FiCpu className="w-10 h-10 text-emerald-500" />,
    skills: ["React", "Tailwind", "Figma", "Canva", "VS Code","HTML","CSS", "JavaScript", "GitHub Copilot","Git","Github"],
  },
  {
    category: "Backend & APIs",
    color: "from-emerald-600 to-green-600",
    icon: <FiServer className="w-10 h-10 text-emerald-500" />,
    skills: ["FastAPI", "Django","Laravel", "Flask", "MySQL", "PostgreSQL", "Git", "GitHub Copilot", "VS Code"],
  },
  {
    category: "Machine Learning & Data",
    color: "from-purple-600 to-pink-600",
    icon: <FiDatabase className="w-10 h-10 text-emerald-500" />,
    skills: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Power BI",
      "Matplotlib",
      "Plotly",
      "Google Colab",
      "Ultralytics",
      "Pandas",
      "Python",
      "NumPy",
      "Azure",
      "YOLO",
      "GitHub Copilot",


    ],
  },
];




  // Memoize skill particles if you decide to bring them back later
  // const skillParticles = useMemo(() => { ... }, []);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};
// ────────────────────────────────────────────────
//  Main Component
// ────────────────────────────────────────────────

export default function Stacks() {
  return (
    <SectionWrapper
      id="stacks"
      className="relative min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row items-center lg:items-stretch border-t border-neutral-800 border rounded-[2.5rem] collab-bg grain-overlay overflow-hidden relative shadow-2xl"
        style={{
          backgroundImage: `url(${data.cta.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Side */}
        <div className="flex flex-col justify-center px-6 py-12 md:py-20 lg:py-40 lg:pl-16 items-center lg:items-start gap-6 z-10 w-full lg:w-1/2 text-center lg:text-left">
       <motion.p 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.3 }}
                     className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-[0.3em] text-xs mb-6 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
                   >
                     <Icon className="w-5 h-5 fill-current" /> Services
                   </motion.p>
                   <h2 className="heading text-white">
                   Tech Stack
                   </h2>

          <motion.p 
            variants={itemVariants}
            className="text-gray-300 subtext leading-relaxed"
          >
            Great things come from shared momentum. We bring the ideas, you
            bring the ambition, and together we make creative that actually
            lands.
          </motion.p >

        </div>

        {/* Cards Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "circOut" }}
          className="relative w-full lg:w-1/2 min-h-[400px] sm:min-h-[450px] md:min-h-[600px] flex items-center justify-center"
        >
          <div className="w-full max-w-md sm:max-w-xl lg:max-w-lg">
            <CardSwap
              cardDistance={80}
              verticalDistance={110}
              delay={3500}
              pauseOnHover={true}
              className="absolute bottom-5 right-5 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[1000px] overflow-visible max-[768px]:translate-x-[15%] max-[768px]:translate-y-[10%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[10%] max-[480px]:translate-y-[5%] max-[480px]:scale-[0.6]"
            >
              {skillStacks.map((stack) => (
                <Card
                  key={stack.category}
                  className="bg-neutral-950/60 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-3xl"
                >
                  <div className="flex flex-col items-center text-center p-6 sm:p-10 space-y-8">
                    <div className="flex items-center gap-5 w-full pb-6 border-b border-white/10">
                      <div className="p-3 rounded-2xl bg-white/5 text-3xl">
                        {stack.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-xl font-bold text-white tracking-tight">
                        {stack.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                      {stack.skills.map((skill, i) => (
                        <span
                          key={skill}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + (i * 0.05) }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                          className="px-5 py-2 text-sm font-semibold bg-white/5 text-gray-200 rounded-xl border border-white/10 backdrop-blur-md cursor-default transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </motion.div>

        {/* Background glow enhancement */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-indigo-500/20 rounded-full blur-[140px] pointer-events-none" 
        />
      </motion.div>
    </SectionWrapper>
  );

}