import Image from "next/image";
import Loading from "./loading";
import Projects from "./projects/page";


export default function Home() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center md:mt-32 mt-10">
      <Loading />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:gap-32 gap-10 items-center mb-16">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash-display-semibold mb-2 text-center md:text-left">
              Hey, I&apos;m Sanjana
            </h1>
            <p className="text-2xl mb-6 text-center md:text-left">Full-Stack Web Developer</p>
            <p className="text-lg text-center md:text-left leading-relaxed">
              I enjoy creating interactive and visually appealing websites while continuously learning new technologies to stay up-to-date with the latest trends in web development.
            </p>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-lg">
              <Image src="/hero.jpeg" layout="fill" objectFit="cover" alt="Sanjana" />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <Projects/>
     
      </div>
    </div>
  );
}
