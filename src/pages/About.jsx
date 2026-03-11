import { motion } from "framer-motion";
import aboutImage from "../assets/about2.svg";
import data from "../utils/data.json";
import SectionWrapper from "../components/SectionWrapper";
import Card from "../components/Card";
import Tag from "../components/Tag";
import {
  FiCpu, FiCode, FiDatabase, FiZap, FiSettings, FiPenTool,
  FiLayers, FiTerminal, FiCloud, FiBarChart2, FiGithub, FiFigma
} from "react-icons/fi";

// === Icon Maps === //
const categoryIcons = {
  core: FiCode,
  ai_ml: FiCpu,
  automation_tools: FiSettings,
  design_tools: FiPenTool,
  default: FiZap,
};

const skillIcons = {
  react: FiZap,
  flask: FiCloud,
  fastapi: FiTerminal,
  tailwind: FiLayers,
  sqlite: FiDatabase,
  yolo: FiCpu,
  "scikit-learn": FiBarChart2,
  pandas: FiLayers,
  numpy: FiLayers,
  selenium: FiSettings,
  "power bi": FiBarChart2,
  github: FiGithub,
  figma: FiFigma,
  canva: FiPenTool,
};

const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex flex-col lg:flex-row items-center gap-14"
    >
      {/* Illustration */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={aboutImage}
          alt="About Hasan"
          className="w-72 md:w-96 drop-shadow-lg select-none"
          draggable="false"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full lg:w-1/2 space-y-8"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Bio */}
        <h2 className="heading">About Me</h2>
        <p className="subtext">{data.about.bio}</p>

    
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
