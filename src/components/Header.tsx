
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-navy to-brand-cyan rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            {/* Hide text on mobile, show on larger screens */}
            <span className={`font-montserrat font-bold text-xl transition-colors hidden sm:block ${
              isScrolled ? 'text-brand-navy' : 'text-white'
            }`}>
              Smart Leads AI
            </span>
          </div>

          {/* CTA Buttons - Always visible when scrolled, responsive padding */}
          <div className={`flex items-center space-x-2 md:space-x-4 transition-all duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <Button className="bg-brand-cyan hover:bg-brand-cyan/90 text-white font-opensans font-medium px-3 md:px-6 py-2 text-sm md:text-base rounded-full shadow-lg">
              Watch Demo
            </Button>
            <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-opensans font-medium px-3 md:px-6 py-2 text-sm md:text-base rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
