
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Building } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "£49",
      period: "/mo*",
      icon: Sparkles,
      description: "Perfect for new beauty businesses",
      features: [
        "1 AI agent",
        "1,000 beauty conversations/mo",
        "1 platform integration",
        "Custom tone & personality training",
        "Beauty-specific conversation templates",
        "Priority support from beauty experts",
        "Advanced analytics"
      ],
      popular: false
    },
    {
      name: "Growing Business",
      price: "£99",
      period: "/mo*",
      icon: Crown,
      description: "For established beauty businesses",
      features: [
        "3 AI agents",
        "3,000 beauty conversations/mo",
        "3 platform integrations",
        "All Starter features included",
        "Multi-location support",
        "Team collaboration tools",
        "Enhanced reporting dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing*",
      icon: Building,
      description: "For large beauty chains & franchises",
      features: [
        "Unlimited agents & conversations",
        "Unlimited integrations",
        "Dedicated onboarding & SLA",
        "White-label options",
        "API access",
        "Custom integrations",
        "24/7 premium support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            Simple Pricing for Beautiful Results
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to transform your beauty business. All plans include everything you need to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-gradient-to-br ${
                plan.popular 
                  ? 'from-brand-soft to-white border-2 border-brand-gold shadow-xl scale-105' 
                  : 'from-white to-brand-gray border border-pink-100 shadow-lg'
              } rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'hover:scale-110' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-brand-gold to-brand-cyan text-white px-6 py-2 rounded-full text-sm font-opensans font-bold">
                    ✨ Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-cyan to-brand-gold rounded-full mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-montserrat font-bold text-brand-navy">
                    {plan.price}
                  </span>
                  <span className="font-opensans text-gray-600 ml-2 text-lg">
                    {plan.period}
                  </span>
                </div>
                <p className="font-opensans text-gray-600">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-brand-cyan to-brand-gold rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-opensans text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Button className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brand-gold to-brand-cyan hover:from-brand-cyan hover:to-brand-gold'
                    : 'bg-brand-cyan hover:bg-brand-cyan/90'
                } text-white font-opensans font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-opensans text-gray-500 text-sm">
            * + setup fee
          </p>
          <p className="font-opensans text-gray-500 text-sm mt-2">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
