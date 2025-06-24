
import { Calendar, MessageCircle, PoundSterling, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Seamless appointment scheduling 24/7"
  },
  {
    icon: MessageCircle,
    title: "Automated Reminders",
    description: "Smart SMS & email notifications"
  },
  {
    icon: PoundSterling,
    title: "Custom Pricing Info",
    description: "Personalized service quotes instantly"
  },
  {
    icon: Sparkles,
    title: "Personalized Chat Tone",
    description: "AI that sounds exactly like you"
  }
];

const BenefitsStrip = () => {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-brand-navy rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-2">
                {benefit.title}
              </h3>
              <p className="font-opensans text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
