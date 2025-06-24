
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "99",
    period: "month",
    description: "Perfect for single location salons",
    features: [
      "1 AI Agent",
      "Up to 500 conversations/month",
      "Basic integrations",
      "Email support",
      "Standard response templates"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "199",
    period: "month", 
    description: "Ideal for growing beauty businesses",
    features: [
      "3 AI Agents",
      "Up to 2,000 conversations/month",
      "All integrations included",
      "Priority support",
      "Custom tone training",
      "Advanced analytics",
      "Multi-location support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large chains and franchises",
    features: [
      "Unlimited AI Agents",
      "Unlimited conversations",
      "White-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced reporting",
      "SLA guarantee"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business. All plans include our signature personal tone adaptation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.popular 
                  ? 'border-brand-cyan bg-gradient-to-b from-white to-brand-gray shadow-xl' 
                  : 'border-gray-200 bg-white hover:border-brand-cyan/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-gold text-brand-navy px-4 py-2 rounded-full font-opensans font-semibold text-sm flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-2">
                  {plan.name}
                </h3>
                <p className="font-opensans text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-montserrat font-bold text-brand-navy">
                    £{plan.price}
                  </span>
                  {plan.period && (
                    <span className="font-opensans text-gray-600 ml-2">
                      /{plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-cyan mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-opensans text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 font-opensans font-semibold text-lg rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-brand-gold hover:bg-brand-gold/90 text-brand-navy'
                    : 'bg-brand-cyan hover:bg-brand-cyan/90 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-opensans text-gray-600 mb-2">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="font-opensans text-sm text-gray-500">
            Cancel anytime. Setup and onboarding included.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
