import ProductCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
    return (
        <div>
               <div className="max-w-[60rem] mx-auto mt-32 lg:mt-40">
          <h2 className="projects font-clash-display-semibold text-center text-7xl">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-none mt-10">
            {projects.map((project) => (
              <ProductCard
                key={project.id}
                id={project.id.toString()}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
              />
            ))}
          </div>
        </div>
        </div>
    );
}
