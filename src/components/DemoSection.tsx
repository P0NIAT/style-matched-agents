
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            See Your AI Agent In Action
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI seamlessly handles client conversations, books appointments, 
            and maintains your unique communication style throughout the entire process.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video bg-brand-navy rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-navy/80 flex items-center justify-center">
              {/* Mock Chat Interface */}
              <div className="w-full max-w-md mx-auto p-6">
                <div className="bg-white rounded-lg p-4 mb-4 shadow-lg animate-fade-in">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <span className="font-opensans font-semibold text-brand-navy">Smart Leads Assistant</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="font-opensans text-sm text-gray-800">Hi lovely! ✨ What can I help you with today?</p>
                    </div>
                    <div className="bg-brand-cyan rounded-lg p-3 ml-8">
                      <p className="font-opensans text-sm text-white">I'd like to book a highlights appointment</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="font-opensans text-sm text-gray-800">Perfect! I have availability this Thursday at 2pm or Friday at 10am. Which works better for you? 💫</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Demo Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-cyan rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-montserrat font-semibold text-brand-navy mb-2">Natural Conversation</h4>
              <p className="font-opensans text-sm text-gray-600">AI adapts to your tone and style</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-cyan rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-montserrat font-semibold text-brand-navy mb-2">Smart Booking</h4>
              <p className="font-opensans text-sm text-gray-600">Real-time calendar integration</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-cyan rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-montserrat font-semibold text-brand-navy mb-2">Follow-up Flow</h4>
              <p className="font-opensans text-sm text-gray-600">Automated reminders and confirmations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
