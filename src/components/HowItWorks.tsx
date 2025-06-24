
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
    <section id="how-it-works" className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            How It Works
          </h2>
          <p className="font-opensans text-xl text-gray-300 max-w-3xl mx-auto">
            Three simple steps that transform your client communication and booking process
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
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-brand-cyan to-transparent transform translate-x-6 z-0"></div>
              )}
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-cyan rounded-xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                  {step.title}
                </h3>
                <p className="font-opensans text-gray-300 leading-relaxed">
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
