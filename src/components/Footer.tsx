
import { Button } from "@/components/ui/button";
import { Sparkles, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-cyan to-brand-gold rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="font-montserrat font-bold text-xl">Smart Leads AI</span>
            </div>
            <p className="font-opensans text-gray-300 mb-6 max-w-md">
              AI-powered automation that transforms how beauty businesses connect with clients. 
              24/7 booking, personalized communication, and seamless customer experiences.
            </p>
            
            {/* iOS-style Social Icons */}
            <div className="flex space-x-4 mb-6">
              <Button size="icon" variant="outline" className="w-12 h-12 border-gray-600 text-gray-300 hover:bg-white hover:text-brand-navy rounded-xl">
                📘
              </Button>
              <Button size="icon" variant="outline" className="w-12 h-12 border-gray-600 text-gray-300 hover:bg-white hover:text-brand-navy rounded-xl">
                📷
              </Button>
              <Button size="icon" variant="outline" className="w-12 h-12 border-gray-600 text-gray-300 hover:bg-white hover:text-brand-navy rounded-xl">
                🐦
              </Button>
              <Button size="icon" variant="outline" className="w-12 h-12 border-gray-600 text-gray-300 hover:bg-white hover:text-brand-navy rounded-xl">
                💼
              </Button>
            </div>

            {/* Gold Email Button */}
            <Button 
              className="bg-gradient-to-r from-brand-gold to-brand-cyan hover:from-brand-cyan hover:to-brand-gold text-white font-opensans font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'mailto:info@smartleadsai.io'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 font-opensans text-gray-300">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">AI Chat Agents</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Automated Booking</a></li>
              <li><a href="#integrations" className="hover:text-brand-cyan transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Analytics & Reporting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 font-opensans text-gray-300">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">About Us</a></li>
              <li><a href="#pricing" className="hover:text-brand-cyan transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-opensans text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Smart Leads AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="font-opensans text-gray-400 text-sm">
              Made with ❤️ for beauty businesses
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
