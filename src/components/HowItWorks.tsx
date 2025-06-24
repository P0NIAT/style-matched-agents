
import { MessageSquare, Calendar, Bell } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Client Messages",
    description: "AI agent engages naturally, asking about services, preferred dates, and specific details in your unique style."
  },
  {
    icon: Calendar,
    number: "02", 
    title: "Smart Booking",
    description: "Agent automatically books appointments via Google Calendar or Calendly, checking availability in real-time."
  },
  {
    icon: Bell,
    number: "03",
    title: "Automated Follow-up",
    description: "SMS confirmations and strategic reminders sent at 72h, 24h, and 2h before appointments."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            How It Works
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps that transform your client communication and booking process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-brand-cyan to-transparent transform translate-x-6 z-0"></div>
              )}
              
              <div className="relative z-10 text-center lg:text-left">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-cyan to-brand-navy rounded-xl text-white font-montserrat font-bold text-lg mb-4 lg:mb-6">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-gray rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-brand-navy" />
                </div>

                {/* Content */}
                <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-4">
                  {step.title}
                </h3>
                <p className="font-opensans text-gray-600 leading-relaxed">
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
