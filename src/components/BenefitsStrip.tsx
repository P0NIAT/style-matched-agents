
import { Calendar, MessageCircle, Heart, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Seamless appointment scheduling that works while you sleep"
  },
  {
    icon: MessageCircle,
    title: "Smart Reminders",
    description: "Gentle SMS & email notifications your clients love"
  },
  {
    icon: Heart,
    title: "Personal Pricing",
    description: "Custom service quotes that reflect your unique value"
  },
  {
    icon: Sparkles,
    title: "Your Voice, Always",
    description: "AI that captures your warmth and personality perfectly"
  }
];

const BenefitsStrip = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-brand-soft to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-navy mb-4">
            Everything Your Beauty Business Needs
          </h2>
          <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
            Designed specifically for salon owners who want to focus on what they love most—making clients beautiful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center group animate-fade-in bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-3">
                {benefit.title}
              </h3>
              <p className="font-opensans text-gray-600 leading-relaxed">
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
