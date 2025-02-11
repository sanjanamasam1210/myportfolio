import Image from "next/image";
import Loading from "./loading";
import Projects from "./projects/page";
import Technology from "./technology/page";
import Link from "next/link";


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
            <p className="text-lg text-center md:text-left leading-relaxed tracking-wide">
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
        <Technology/>
        <div className="min-h-[75vh] flex justify-center items-center flex-col">
        <div className="font-clash-display-bold text-center text-7xl mt-10">Get in Touch</div>
        <div className="flex justify-center mt-4">
        <Link href="/contact">
            <button
              type="submit"
              className="px-12 py-3 rounded-full border-[#111111] border-3 font-semibold hover:bg-[#111111] hover:text-white transition-colors mt-6"
            >
              Contact
            </button>
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
}
