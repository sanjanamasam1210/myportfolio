export default function Technology() {
    return (
        <div className="max-w-[60rem] mx-auto mt-32 lg:mt-40 px-4">
            <h2 className="font-clash-display-semibold text-center text-4xl md:text-5xl lg:text-6xl mb-12">
                Tech Stack & Expertise
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {/* Example logos - replace with your actual images */}
                <div className="p-3 bg-white/5 rounded-lg hover:scale-105 transition-transform">
                    <img 
                        src="/react.png" 
                        alt="React" 
                        className="w-full h-auto max-w-[80px] mx-auto"
                    />
                </div>

                <div className="p-3 bg-white/5 rounded-lg hover:scale-105 transition-transform">
                    <img 
                        src="/next.png" 
                        alt="Nextjs" 
                        className="w-full h-auto max-w-[80px] mx-auto"
                    />
                </div>

                <div className="p-3 bg-white/5 rounded-lg hover:scale-105 transition-transform">
                    <img 
                        src="/python.png" 
                        alt="Python" 
                        className="w-full h-auto max-w-[80px] mx-auto"
                    />
                </div>
                <div className="p-3 bg-white/5 rounded-lg hover:scale-105 transition-transform">
                    <img 
                        src="/html.png" 
                        alt="html" 
                        className="w-full h-auto max-w-[80px] mx-auto"
                    />
                </div>
                <div className="p-3 bg-white/5 rounded-lg hover:scale-105 transition-transform">
                    <img 
                        src="/tailwind.png" 
                        alt="tailwind" 
                        className="w-full h-auto max-w-[80px] mx-auto"
                    />
                </div>

                {/* Add more logos following the same pattern */}
            </div>
        </div>
    );
}
