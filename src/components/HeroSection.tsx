import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Gradient Overlay */}
      <video
        ref={videoRef}
        poster="/van2.jpg"
        src="/Intro.mp4"
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay & Floating Shapes */}
      <div className="absolute inset-0 z-10">
        <div className="relative w-full h-full bg-gradient-to-br from-brand-navy via-brand-accent to-brand-cyan">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-brand-cyan/70"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div
              className="absolute top-40 right-20 w-16 h-16 bg-brand-gold/20 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-32 left-20 w-12 h-12 bg-brand-cyan/30 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-20 right-40 w-24 h-24 bg-white/5 rounded-full animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Play Overlay (only when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button
            onClick={handlePlay}
            className="group relative w-28 h-28 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300 hover:scale-110 border-2 border-brand-gold shadow-2xl"
          >
            <Play className="w-12 h-12 text-white ml-1 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-full border-2 border-brand-gold animate-ping opacity-30"></div>
          </button>
        </div>
      )}

      {/* Content */}
      <div className="relative z-30 text-center animate-fade-in px-6">
        {/* Sparkle Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
          <span className="block sm:hidden">
            SmartLeads AI Agent That Speaks{" "}
            <span className="text-brand-gold">Your Beauty Language</span>
          </span>
          <span className="hidden sm:block">
            AI That Speaks{" "}
            <span className="text-brand-gold">Your Beauty Language</span>
          </span>
        </h1>

        {/* Subhead */}
        <p className="font-opensans text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          24/7 chat that books appointments, sends reminders, and sounds exactly
          like you—{" "}
          <span className="text-brand-gold font-semibold">
            your clients will never know it's AI
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-brand-gold to-brand-cyan hover:from-brand-cyan hover:to-brand-gold text-white font-opensans font-bold px-12 py-6 text-xl rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
            Watch Demo
          </Button>
          <Button className="bg-transparent border-2 border-white text-white font-opensans font-bold px-12 py-6 text-xl rounded-full hover:bg-white/10 transition-all duration-300 shadow-2xl">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
