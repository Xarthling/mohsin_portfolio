import HeroIllustration from "../assets/hero-illustration1.svg?react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
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
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  return (
    <SectionWrapper
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center gap-8 overflow-hidden px-6 py-20 md:px-12 md:py-24"
    >
      {/* 1. INTRODUCTION */}
      <motion.div
        className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-5 text-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* <Typewriter text={data.hero.name} speed={100} /> */}

        <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 dark:text-white">
          {data.hero.tagline}
        </h1>

      
      </motion.div>

      {/* 2. CENTERED HERO VIDEO */}
      <motion.div
        className="relative z-0 flex w-full justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute top-1/2 left-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30 blur-[100px] dark:bg-indigo-600/40 sm:h-[360px] sm:w-[360px] md:h-[500px] md:w-[500px]" />

        <div className="relative flex w-full max-w-3xl justify-center">
          {videoUnavailable ? (
            <HeroIllustration
              className="w-full max-w-[400px] h-auto drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.2)] dark:drop-shadow-[-20px_20px_50px_rgba(99,102,241,0.1)] text-neutral-800 dark:text-gray-200"
              aria-label="Portfolio illustration"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full aspect-video object-cover rounded-2xl drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.2)] dark:drop-shadow-[-20px_20px_50px_rgba(99,102,241,0.1)]"
              aria-label="Portfolio introduction video"
              onError={() => setVideoUnavailable(true)}
              onStalled={() => setVideoUnavailable(true)}
              onCanPlay={(event) => {
                event.currentTarget.play().catch(() => setVideoUnavailable(true));
              }}
            >
              <source src="/Projects/test.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          )}
        </div>
      </motion.div>

      {/* 3. ACTIONS AND SOCIAL LINKS */}
      <div className="relative z-10 flex w-full flex-col items-center gap-5">
          <p className="max-w-2xl text-sm md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 md:line-clamp-none">
          {data.hero.intro}
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#projects" className="w-full sm:w-auto">
            <Button className="w-full" variant="primary">
              {data.hero.cta[0].label}
            </Button>
          </a>

          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="glass" className="w-full">
              {data.hero.cta[1].label}
            </Button>
          </a>
        </div>

        <div className="flex gap-8 text-neutral-700 dark:text-gray-400">
          <a
            href={data.contact.upwork}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="hover:text-indigo-600 transition-all hover:-translate-y-1"
          >
            <SiUpwork size={24} />
          </a>
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-600 transition-all hover:-translate-y-1"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href={`mailto:${data.contact.email}`}
            aria-label="Email"
            className="hover:text-indigo-600 transition-all hover:-translate-y-1"
          >
            <FiMail size={24} />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Home;
