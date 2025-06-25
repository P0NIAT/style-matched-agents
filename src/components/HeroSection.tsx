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
    <section className="relative w-full flex flex-col items-center justify-center min-h-screen px-4 md:px-0">
      {/* 1. Headline & Sparkles & CTAs (z-30) */}
      <div className="relative z-30 text-center max-w-2xl mt-8">
        {/* Sparkle Icon */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>
        {/* Headline */}
        <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
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
        <p className="font-opensans text-lg md:text-xl text-white/90 mb-6">
          24/7 chat that books appointments, sends reminders, and sounds exactly
          like you—{" "}
          <span className="text-brand-gold font-semibold">
            your clients will never know it's AI
          </span>
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="bg-gradient-to-r from-brand-gold to-brand-cyan text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-shadow">
            Watch Demo
          </Button>
          <Button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition">
            Contact Us
          </Button>
        </div>
      </div>

      {/* 2. Video Frame (z-20) */}
      <div className="relative w-full max-w-4xl aspect-w-16 aspect-h-9 z-20">
        {/* Video */}
        <video
          ref={videoRef}
          poster="/van2.jpg"
          src="/intro.mp4"
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient & Decorative Shapes */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/60 to-brand-cyan/60" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-float" />
            <div
              className="absolute top-16 right-12 w-10 h-10 bg-brand-gold/20 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-16 left-12 w-8 h-8 bg-brand-cyan/30 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
        {/* Play Button Overlay */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 m-auto w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition transform hover:scale-110 border-2 border-brand-gold shadow-lg z-30"
          >
            <Play className="w-10 h-10 text-white" />
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
