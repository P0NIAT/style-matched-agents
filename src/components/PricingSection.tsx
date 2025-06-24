
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Table - Left */}
          <div className="space-y-6">
            <div className="bg-brand-gray rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-2">
                  Professional Plan
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-montserrat font-bold text-brand-navy">
                    £99
                  </span>
                  <span className="font-opensans text-gray-600 ml-2">
                    /month
                  </span>
                </div>
                <p className="font-opensans text-gray-600">
                  Perfect for growing beauty businesses
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Up to 1,000 conversations/month",
                  "All integrations included",
                  "Custom tone training",
                  "Priority support",
                  "Advanced analytics"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-cyan mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-opensans text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-opensans text-center text-gray-600 text-sm">
              14-day free trial. No credit card required.
            </p>
          </div>

          {/* CTA - Right */}
          <div className="text-center lg:text-left">
            <h3 className="font-montserrat font-bold text-3xl text-brand-navy mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="font-opensans text-xl text-gray-600 mb-8">
              Join hundreds of beauty businesses already using Smart Leads AI to automate their client communication.
            </p>
            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-opensans font-bold px-12 py-6 text-xl rounded-xl hover:scale-105 transition-all duration-300 w-full lg:w-auto">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
