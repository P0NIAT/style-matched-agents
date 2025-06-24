
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-brand-navy">
          {/* Placeholder for video - using gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 to-brand-navy/70"></div>
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Video Play Button */}
          <div className="mb-8">
            <button className="group relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 mx-auto">
              <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
            </button>
          </div>

          {/* Headline */}
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            AI Agents That Book &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-gold">
              Delight Your Beauty Clients
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-opensans text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            24/7 chat, automated booking, style-matched responses & reminders—all sounding 
            <span className="text-brand-gold font-semibold"> just like you</span>.
          </p>

          {/* Feature Highlight */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-2xl mx-auto border border-white/20">
            <p className="font-opensans text-lg text-white">
              <span className="font-semibold text-brand-cyan">NEW:</span> Our AI adapts to your personal writing style, 
              so every chat sounds exactly like you—your clients will never guess it's automated.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-brand-cyan hover:bg-brand-cyan/90 text-white font-opensans font-semibold px-8 py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300 group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Strategy Demo
            </Button>
            <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-opensans font-semibold px-8 py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300 group">
              See How It Works
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
