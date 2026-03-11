import data from "../utils/data.json";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Tag from "../components/Tag";
import SectionWrapper from "../components/SectionWrapper";
import { FaExternalLinkAlt, FaGithub, FaFileAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      {/* Header: Stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
        <div>
          <h2 className="heading">Projects</h2>
        </div>

        <p className="text-gray-500 dark:text-gray-400 max-w-sm text-sm md:text-base leading-relaxed">
          Great things come from shared momentum. We bring the ideas, you bring
          the ambition, and together we make creative that actually lands.
        </p>
      </div>

      {/* Grid: 1 col on mobile, 2 on tablet+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="group flex flex-col gap-5 p-0 overflow-hidden bg-white dark:bg-neutral-900 border-none shadow-xl">
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-video   w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded rounded-xl p-1  transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="px-6 pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="font-bold text-2xl text-gray-800 dark:text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Tag
                        key={tag}
                        className="text-[10px] uppercase font-bold tracking-wider"
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Mobile-only links (since hover is hard on touch) */}
                <div className="flex gap-6 border-t border-gray-100 dark:border-neutral-800 pt-4">
                  {/* Render Demo Link if it exists */}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-500 font-bold text-xs uppercase hover:underline transition-all"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}

                  {/* Render GitHub Link if it exists */}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-500 font-bold text-xs uppercase hover:underline transition-all"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// Helper component for cleaner link styles
const ProjectLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-indigo-500 hover:text-white transition-colors"
  >
    {icon} {label}
  </a>
);

export default Projects;
