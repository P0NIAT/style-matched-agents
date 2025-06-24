
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            Simple Pricing for Beautiful Results
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            One plan that includes everything you need to transform your beauty business. No hidden fees, no complicated tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Card - Left */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-brand-soft to-white rounded-3xl p-8 border-2 border-brand-gold shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-gold/20 to-brand-cyan/20 rounded-full transform translate-x-12 -translate-y-12"></div>
              
              <div className="text-center mb-8 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-cyan to-brand-gold rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-3xl text-brand-navy mb-2">
                  Beauty Pro Plan
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-montserrat font-bold text-brand-navy">
                    £99
                  </span>
                  <span className="font-opensans text-gray-600 ml-2 text-lg">
                    /month
                  </span>
                </div>
                <p className="font-opensans text-gray-600 text-lg">
                  Everything your beauty business needs to thrive
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Up to 1,000 beauty conversations/month",
                  "All platform integrations included",
                  "Custom tone & personality training",
                  "Beauty-specific conversation templates",
                  "Priority support from beauty experts",
                  "Advanced analytics & insights",
                  "Unlimited appointment bookings"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-brand-cyan to-brand-gold rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-opensans text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <div className="inline-flex items-center bg-brand-gold/10 text-brand-navy px-4 py-2 rounded-full text-sm font-opensans font-medium mb-2">
                  ✨ 14-day free trial • No credit card required
                </div>
              </div>
            </div>
          </div>

          {/* CTA - Right */}
          <div className="text-center lg:text-left">
            <h3 className="font-montserrat font-bold text-4xl text-brand-navy mb-6 leading-tight">
              Ready to Transform Your Beauty Business? 💅
            </h3>
            <p className="font-opensans text-xl text-gray-600 mb-8 leading-relaxed">
              Join hundreds of beauty professionals who've already discovered the magic of AI that sounds exactly like them. 
              <span className="text-brand-cyan font-semibold"> Your clients will love the personal touch!</span>
            </p>
            
            <div className="space-y-4">
              <Button className="bg-gradient-to-r from-brand-gold to-brand-cyan hover:from-brand-cyan hover:to-brand-gold text-white font-opensans font-bold px-12 py-6 text-xl rounded-full hover:scale-105 transition-all duration-300 w-full lg:w-auto shadow-xl">
                Start Your Free Trial ✨
              </Button>
              <p className="font-opensans text-gray-500 text-sm">
                Setup takes less than 5 minutes • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
