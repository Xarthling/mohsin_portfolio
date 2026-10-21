import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/Card";
import Tag from "../components/Tag";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import data from "../utils/data.json";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectSectionRef = useRef(null);

  const handleToggle = () => {
    if (showAll) {
      // If closing, scroll back to the top of the project section
      setShowAll(false);
      projectSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setShowAll(true);
    }
  };

  // Logic to determine which projects to show
  const visibleProjects = showAll ? data.projects : data.projects.slice(0, 4);

  return (
    <div ref={projectSectionRef}>
      <SectionWrapper id="projects">
        {" "}
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
          <div>
            <h2 className="heading">Projects</h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm text-md bold md:text-base leading-relaxed">
            DISCOVER HOW THIS CAN WORK FOR YOUR BUSINESS
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {/* upon card hover reveal complete description that is clamped */}
                <Card className="group flex flex-col gap-5 p-0 overflow-hidden bg-white dark:bg-neutral-900 border-none shadow-xl h-full">
                  {/* Media Container */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    {project.video ? (
                      <video
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        poster={project.image}
                        className="w-full h-full object-cover rounded-xl p-1"
                        aria-label={`${project.title} video preview`}
                        onMouseEnter={(event) => {
                          event.currentTarget.play().catch((error) => {
                            console.warn(
                              `Could not autoplay ${project.title} preview:`,
                              error
                            );
                          });
                        }}
                        onMouseLeave={(event) => {
                          const video = event.currentTarget;
                          video.pause();
                          video.currentTime = 0;
                          video.load();
                        }}
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-xl p-1 transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="px-6 pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h3 className="font-bold text-2xl text-gray-800 dark:text-white tracking-tight">
                        {project.title}
                      </h3>
                      {/* <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Tag
                            key={tag}
                            className="text-[10px] uppercase font-bold tracking-wider"
                            
                          >
                            {tag}
                          </Tag>
                        ))}
                      </div> */}
                    </div>

                    {/* <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300 mb-6">
                      {project.description}
                    </p> */}

                    {/* <div className="flex gap-6 border-t border-gray-100 dark:border-neutral-800 pt-4 mt-auto">
                      {project.links?.demo && (
                        <ProjectLink
                          href={project.links.demo}
                          icon={<FaExternalLinkAlt />}
                          label="Demo"
                        />
                      )}
                      {project.links?.github && (
                        <ProjectLink
                          href={project.links.github}
                          icon={<FaGithub />}
                          label="GitHub"
                        />
                      )}
                    </div> */}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Show More / Show Less Button */}
        {data.projects.length > 4 && (
          <div className="mt-16 flex justify-center">
            <Button
              variant="glass"
              className="flex items-center gap-2"
              onClick={handleToggle}
            >
              {showAll ? (
                <>
                  Show Less <FaChevronUp />
                </>
              ) : (
                <>
                  Show All Projects <FaChevronDown />
                </>
              )}{" "}
            </Button>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
};

// Reusable Link Component for better consistency
const ProjectLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-indigo-500 font-bold text-xs uppercase hover:text-indigo-400 transition-colors"
  >
    {icon} {label}
  </a>
);

export default Projects;
