
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-navy to-brand-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SL</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-brand-navy">Smart Leads AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-opensans text-gray-600 hover:text-brand-navy transition-colors">Features</a>
            <a href="#how-it-works" className="font-opensans text-gray-600 hover:text-brand-navy transition-colors">How It Works</a>
            <a href="#pricing" className="font-opensans text-gray-600 hover:text-brand-navy transition-colors">Pricing</a>
            <a href="#integrations" className="font-opensans text-gray-600 hover:text-brand-navy transition-colors">Integrations</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-opensans">
              Sign In
            </Button>
            <Button className="bg-brand-cyan hover:bg-brand-cyan/90 text-white font-opensans font-medium px-6">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
