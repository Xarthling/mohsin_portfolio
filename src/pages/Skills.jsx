import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import data from "../utils/data.json";
import SectionWrapper from "../components/SectionWrapper";
import { FiCpu, FiCode, FiDatabase, FiBarChart  } from "react-icons/fi";
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
  SiPlotly ,
    SiLaravel, 
  SiPhp
} from "react-icons/si";

import AzureIcon from "../assets/skills/Azure-Light.svg?react";
import YoloIcon from "../assets/skills/yolo.svg?react";
import CursorIcon from "../assets/skills/cursor.svg?react";
import CardSwap, { Card } from '../components/CardSwap';

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
    Laravel: <SiLaravel />,
  PHP: <SiPhp />,
  Flask: <FaFlask />,
  Tailwind: <SiTailwindcss />,
  Azure: <AzureIcon className="w-full h-full fill-current" />,
  Ultralytics: <YoloIcon className="w-full h-full fill-current" />,
  TensorFlow: <SiTensorflow />,
  "Scikit-learn": <SiScikitlearn />,
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

const allSkills = Object.values(data.skills).flat();

const skills = allSkills.map((skill, i) => {
  const angle = (i / allSkills.length) * Math.PI * 2;

  // create 3 radius layers to avoid overlap
  const baseRadius = 180 + (i % 3) * 60;

  // small randomness
  const randomOffset = Math.random() * 30 - 15;

  const radius = baseRadius + randomOffset;

  return {
    name: skill,
    icon: iconMap[skill] || <FiCpu />,
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,

    // random icon size
    size: 32 + Math.random() * 24,
  };
});

const SkillNetwork = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]), {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <SectionWrapper
      id="skills"
      className="flex flex-col items-center relative justify-center perspective-[1200px] overflow-hidden py-20 min-h-screen"
    >
      {/* Background glow */}
      <div className="absolute w-[300px] md:w-[650px] h-[300px] md:h-[650px] bg-gradient-radial from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl" />

      <motion.div
        style={{ rotateX, rotateY }}
        // ANIMATION: Initial state is hidden and slightly scaled down
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into frame
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-[300px] h-[300px] md:w-[600px] md:h-[500px] flex items-center justify-center scale-[0.65] sm:scale-75 md:scale-100"
      >
        {/* Connection lines: They "draw" themselves in */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 500">
          <defs>
            <linearGradient id="lineGradient">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {skills.map((s, i) => (
            <motion.line
              key={i}
              x1="300"
              y1="250"
              initial={{ x2: 300, y2: 250, opacity: 0 }}
              whileInView={{ x2: 300 + s.x, y2: 250 + s.y, opacity: 0.25 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.02, ease: "circOut" }}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
          ))}
        </svg>

        {/* Center node: Pops in */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="absolute z-10 bg-indigo-600 dark:bg-indigo-500 text-white dark:text-gray-50 backdrop-blur-lg border border-white/20 w-24 h-24 md:w-28 md:h-28 rounded-full shadow-[0_0_60px_rgba(99,102,241,0.6)] flex flex-col justify-center items-center"
        >
          <motion.p 
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="text-2xl md:text-3xl font-bold"
          >
            Skills
          </motion.p>
        </motion.div>

        {/* Skill nodes: Fly out from center */}
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="absolute p-4 rounded-full text-indigo-500 hover:text-emerald-400 transition-all duration-300"
            // START AT CENTER (0,0 relative to parent)
            initial={{ x: 0, y: 0, opacity: 0 }}
            // BLOOM OUT TO CALCULATED COORDS
            whileInView={{ 
              x: skill.x, 
              y: skill.y, 
              opacity: 1,
              // Once it arrives, start the floating hover animation
              transition: { 
                type: "spring", 
                stiffness: 50, 
                delay: i * 0.03,
              }
            }}
            // SEPARATE FLOAT ANIMATION (continuous)
            animate={{
              x: [skill.x, skill.x + 8, skill.x - 8, skill.x],
              y: [skill.y, skill.y - 8, skill.y + 8, skill.y],
            }}
            transition={{
              x: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
              // Note: we don't put a delay here so it kicks in after the whileInView settles
            }}
            viewport={{ once: true }}
          >
            <div
              className="relative group flex items-center justify-center"
              style={{
                fontSize: skill.size,
                width: skill.size,
                height: skill.size,
              }}
            >
              {skill.icon}
              <span className="absolute min-w-[80px] text-center top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs md:text-sm text-white dark:text-gray-800 bg-gray-800 dark:bg-gray-50 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default SkillNetwork;
