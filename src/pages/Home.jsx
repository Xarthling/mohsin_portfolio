import HeroIllustration from "../assets/hero-illustration1.svg?react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import data from "../utils/data.json";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

const Typewriter = ({ text, speed = 60 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="inline-block bg-white/10 dark:bg-emerald/20 backdrop-blur-md text-emerald-600 dark:text-emerald-400 border border-white/20 dark:border-white/10 rounded-full px-6 py-2 font-mono text-sm sm:text-base mb-2 shadow-xl">
      <code>
        {displayed}
        <span className="animate-pulse font-bold ml-1">|</span>
      </code>
    </div>
  );
};

const Home = () => {
  return (
    <SectionWrapper
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between overflow-hidden px-6 md:px-12 pt-20 md:pt-0"
    >
      {/* 1. THE CONTENT (Top Left on Mobile) */}
      <motion.div
        className="relative h-screen z-10 flex flex-col  md:justify-center items-start text-left gap-5 w-full md:w-1/2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typewriter text={data.hero.name} speed={100} />

        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 dark:text-white">
          {data.hero.tagline}
        </h1>

        <p className="text-sm md:text-xl w-[75%] md:w-auto text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed line-clamp-3 md:line-clamp-none">
          {data.hero.intro}
        </p>

        {/* Button Container */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
  {/* Let's Collaborate Button */}
  <a href="#contact" className="w-1/2 md:w-auto">
    <Button className="w-full" variant="primary">
      Let’s Collaborate
    </Button>
  </a>

  {/* View My Work Button */}
  <a href="#projects" className="w-1/2 md:w-auto">
    <Button
      variant="outline"
      className="w-full backdrop-blur-md"
    >
      View My Work
    </Button>
  </a>
</div>

        {/* Socials */}
       <div className="flex gap-8 mt-4 text-neutral-700 dark:text-gray-400">
  <a
    href={data.contact.github}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-600 transition-all hover:-translate-y-1"
  >
    <FiGithub size={24} />
  </a>
  
  <a
    href={data.contact.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-600 transition-all hover:-translate-y-1"
  >
    <FiLinkedin size={24} />
  </a>
  
  <a
    href={`mailto:${data.contact.email}`}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-600 transition-all hover:-translate-y-1"
  >
    <FiMail size={24} />
  </a>
</div>
      </motion.div>

      {/* 2. THE ILLUSTRATION (Bottom Right on Mobile) */}
      <div className="absolute bottom-65 right-10 md:bottom-0 md:right-0 translate-x-[15%] translate-y-[10%] md:translate-x-0 md:translate-y-0 md:relative w-[70%] md:w-1/2 flex justify-end items-end z-0 pointer-events-none">
        {/* Glow focused behind the image */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[120px] bg-indigo-500/40 dark:bg-indigo-600/50" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-[200px] md:max-w-[400px]"
        >
          <HeroIllustration className="w-full h-auto drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.2)] dark:drop-shadow-[-20px_20px_50px_rgba(99,102,241,0.1)] text-neutral-800 dark:text-gray-200" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
export default Home;
