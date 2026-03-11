import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import About from "../pages/About";

import SkillNetwork from "../pages/Skills";

import Achievements from "../pages/Achievements";

import ExperienceEducation from "../pages/Experience-Education";

import Projects from "../pages/Projects";

import Contact from "../pages/Contact";

import CTA from "../pages/CTA";

import Stacks from "../pages/Stacks";
import Loader from "../components/Loader"; // Import your new loader

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Only render content once loading is handled, or use motion to fade it in */}
      {!isLoading && (
        <MainLayout>
          <Home />
          <Projects />
          <CTA />
          <About />
          <SkillNetwork />
          <Stacks />
          <ExperienceEducation />
          <Achievements />
          <Contact />
        </MainLayout>
      )}
    </>
  );
};

export default AppRoutes;