'use client';

import { useParams } from "next/navigation";
import { projects } from "@/app/data/projects";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import BentoGrid from "@/app/components/BentoGrid"; // Add this import

const ProjectPage = () => {
  const params = useParams();
  const project = projects.find((p) => p.id === Number(params.id));

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 ml-4"
      >
        <h1 className="text-6xl font-bold mb-2 font-clash-display-semibold">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{project.description}</p>
      </motion.div>

      {/* Bento Grid */}
        <BentoGrid images={project.images} />


      {/* Project Details Below */}
      <div className="mt-12 max-w-3xl mx-auto space-y-8">
        {/* Detailed Description */}
        {project.details && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose max-w-none ml-4"
          >
            <h2 className="text-3xl font-medium mb-4 font-clash-display-medium">Project Details</h2>
            <p className="text-gray-700 leading-relaxed">
              {project.details}
            </p>
          </motion.div>
        )}

        {/* Technology Stack */}
        {project.technologies && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="ml-4"

          >
            <h2 className="text-3xl font-medium mb-4 font-clash-display-medium">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="ml-4"

          >
            <h2 className="text-3xl font-medium mb-4 font-clash-display-medium">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center bg-gray-50 rounded-lg p-3"
                >
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
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="flex gap-4 mt-6 ml-4"
  >
    {project.links?.github && (
      <a
        href={project.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
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
        className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors"
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
