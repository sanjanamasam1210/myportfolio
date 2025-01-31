import Image from "next/image";
import Loading from './loading';
import ProductCard from "./components/ProjectCard";
import { projects, Project } from "./data/projects";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center md:mt-32 mt-20">
      <Loading />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:gap-32 gap-10 items-center mb-16">
          {/* Left side: About Me */}
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash-display-semibold mb-2 text-center md:text-left">
              Hey, I&apos;m Sanjana
            </h1>
            <p className="text-2xl mb-6 text-center md:text-left">
              Full-Stack Web Developer
            </p>
            <p className="text-lg text-center md:text-left leading-">
              I enjoy creating interactive and visually appealing websites while continuously learning new technologies to stay up-to-date with the latest trends in web development.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/hero.jpeg"
                layout="fill"
                objectFit="cover"
                alt="Sanjana"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[60rem] mx-auto mt-32">
          <div className="projects font-clash-display-semibold text-center text-6xl ">Projects</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-none mt-10">
            {projects.map((project: Project) => (
              <ProductCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
