'use client';

import { useParams } from "next/navigation";
import { projects } from "@/app/data/projects";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import BentoGrid from "@/app/components/BentoGrid";
import { useRef } from "react";

const ProjectPage = () => {
  const params = useParams();
  const project = projects.find((p) => p.id === Number(params.id));

  const headerRef = useRef(null);
  const detailsRef = useRef(null);
  const techStackRef = useRef(null);
  const featuresRef = useRef(null);
  const linksRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const detailsInView = useInView(detailsRef, { once: true, amount: 0.5 });
  const techStackInView = useInView(techStackRef, { once: true, amount: 0.5 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.5 });
  const linksInView = useInView(linksRef, { once: true, amount: 0.5 });

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        Project not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Project Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 ml-4"
      >
        <h1 className="text-6xl font-bold md:mt-10 mt-6 lg:mt-12 mb-2 font-clash-display-semibold text-center">{project.title}</h1>
        <p className="text-xl text-gray-800 mb-6 text-center">{project.description}</p>
      </motion.div>

      {/* Bento Grid */}
      <BentoGrid images={project.images} />

      {/* Project Details Below */}
      <div className="mt-12 max-w-3xl mx-auto space-y-8">
        {/* Detailed Description */}
        {project.details && (
          <motion.div
            ref={detailsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="prose max-w-none ml-4"
          >
            <h2 className="text-3xl font-medium mb-4 font-clash-display-medium tracking-wide">Project Details</h2>
            <p className="leading-relaxed text-md tracking-wider">{project.details}</p>
          </motion.div>
        )}

        {/* Technology Stack */}
        {project.technologies && (
          <motion.div
            ref={techStackRef}
            initial={{ opacity: 0, y: 20 }}
            animate={techStackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="ml-4"
          >
            <h2 className="text-3xl font-medium mb-4 font-clash-display-medium tracking-wide">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary pr-5 py-1 rounded-full text-md tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Key Features */}
        {project.features && (
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="ml-4"
          >
            <h2 className="text-3xl font-medium mb-4 font-clash-display-medium tracking-wide">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center bg-gray-50 rounded-lg p-3 tracking-wider">
                  <span className="text-primary mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Project Links */}
        {(project.links?.github || project.links?.live) && (
          <motion.div
            ref={linksRef}
            initial={{ opacity: 0, y: 20 }}
            animate={linksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 mt-6 ml-4"
          >
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-wider flex items-center gap-2 px-6 py-2 bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                <FiGithub />
                View Code
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className=" tracking-wider flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FiExternalLink />
                Live Demo
              </a>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
