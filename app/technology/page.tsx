import Image from "next/image";

export default function Technology() {
    const images = [
      "/html.png",
      "/next.png",
      "/react.png",
      "/tailwindnew.png",
      "/next.png",
      "/react.png",
      "/tailwindnew.png"
    ];
  
    return (
      <div className="w-full h-40 mt-32 overflow-hidden whitespace-nowrap relative">
        <div className="inline-flex absolute animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {images.map((image, index) => (
                <div key={index} className="mx-4 w-24 h-24 relative rounded-xl overflow-hidden">
                  <Image 
                    src={image}
                    alt="Coffee"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="inline-flex absolute animate-scroll2" aria-hidden="true">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {images.map((image, index) => (
                <div key={index} className="mx-4 w-24 h-24 relative rounded-xl overflow-hidden">
                  <Image 
                    src={image}
                    alt="Coffee"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  