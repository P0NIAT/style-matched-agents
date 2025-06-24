
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 translate-y-0' 
        : 'bg-transparent translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-navy to-brand-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SL</span>
            </div>
            <span className={`font-montserrat font-bold text-xl transition-colors ${
              isScrolled ? 'text-brand-navy' : 'text-white'
            }`}>
              Smart Leads AI
            </span>
          </div>

          {/* CTA Buttons - Only show when scrolled */}
          <div className={`flex items-center space-x-4 transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <Button className="bg-brand-cyan hover:bg-brand-cyan/90 text-white font-opensans font-medium px-6">
              Watch Demo
            </Button>
            <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-opensans font-medium px-6">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
