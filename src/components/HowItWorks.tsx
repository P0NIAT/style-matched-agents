
import { MessageSquare, Calendar, Bell } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Client Chats",
    description: "Your AI beauty assistant engages naturally, asking about desired services, timing, and special requests—all in your signature style."
  },
  {
    icon: Calendar,
    number: "02", 
    title: "Seamless Booking",
    description: "Appointments are automatically scheduled through your preferred system, with real-time availability checks and confirmations."
  },
  {
    icon: Bell,
    number: "03",
    title: "Thoughtful Follow-up",
    description: "Caring reminders and confirmations are sent at perfect intervals, keeping your clients excited for their beauty transformation."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-brand-navy to-brand-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Three Steps to Beauty Business Bliss
          </h2>
          <p className="font-opensans text-xl text-pink-100 max-w-3xl mx-auto">
            From first chat to final appointment confirmation—everything happens automatically while you focus on your craft
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-brand-gold to-transparent transform translate-x-6 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-cyan rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Step Number */}
                <div className="font-montserrat font-bold text-brand-gold text-sm mb-2 tracking-wide">
                  STEP {step.number}
                </div>

                {/* Content */}
                <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                  {step.title}
                </h3>
                <p className="font-opensans text-pink-100 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
