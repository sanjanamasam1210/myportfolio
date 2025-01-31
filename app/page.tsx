import Image from "next/image";
import Link from "next/link";
import Loading from './loading';

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex md:mt-32 sm:mt-20 justify-center">
      <Loading />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-32 items-center">
          {/* Left side: About Me */}
          <div className="w-full ">
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
          <div className=" flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/hero3.jpeg"
                layout="fill"
                objectFit="cover"
                alt="Sanjana"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute bottom-4 left-4">
        <Link href="/fonts">
          <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
            Explore Fonts
          </button>
        </Link>
      </nav>
    </div>
  );
}
