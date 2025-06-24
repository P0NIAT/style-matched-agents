
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-brand-navy">
          {/* Placeholder for video - using gradient overlay */}
          <div className="absolute inset-0 bg-brand-navy/70"></div>
          {/* Video placeholder pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full p-8">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="bg-white/20 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Content - Just Play Button */}
      <div className="relative z-10 text-center animate-fade-in">
        {/* Circular Play Button */}
        <div className="mb-6">
          <button className="group relative w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border-2 border-brand-cyan">
            <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-full border-2 border-brand-cyan animate-ping opacity-30"></div>
          </button>
          <p className="font-opensans text-white mt-4 text-lg">Play Strategy Demo</p>
        </div>

        {/* Single CTA Button */}
        <Button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-opensans font-semibold px-8 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300">
          Watch Demo
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
