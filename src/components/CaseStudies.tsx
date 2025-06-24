
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    businessName: "Luxe Hair Studio",
    businessType: "Premium Hair Salon",
    increase: "+47%",
    metric: "Monthly Bookings",
    description: "Transformed their client communication with 24/7 AI that perfectly matches their upscale, personal approach.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop"
  },
  {
    businessName: "Serenity Spa & Wellness",
    businessType: "Luxury Spa",
    increase: "+62%",
    metric: "Client Retention",
    description: "Our AI agent's personalized tone helped maintain their zen, welcoming atmosphere in every interaction.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            Real Results from Beauty Businesses
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            See how Smart Leads AI has transformed booking experiences and grown revenue for salons, spas, and clinics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={study.businessName}
              className="bg-gradient-to-br from-brand-gray to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Business Info */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-2">
                    {study.businessName}
                  </h3>
                  <p className="font-opensans text-brand-cyan font-medium">
                    {study.businessType}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 mb-1">
                    <TrendingUp className="w-5 h-5 mr-1" />
                    <span className="font-montserrat font-bold text-2xl">{study.increase}</span>
                  </div>
                  <p className="font-opensans text-sm text-gray-600">{study.metric}</p>
                </div>
              </div>

              {/* Description */}
              <p className="font-opensans text-gray-700 mb-6 leading-relaxed">
                {study.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white rounded-lg border border-gray-100">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-lg text-brand-navy">24/7</div>
                  <div className="font-opensans text-xs text-gray-600">Availability</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="font-montserrat font-bold text-lg text-brand-navy">98%</div>
                  <div className="font-opensans text-xs text-gray-600">Response Rate</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-lg text-brand-navy">3.2s</div>
                  <div className="font-opensans text-xs text-gray-600">Avg Response</div>
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white group transition-all duration-300">
                Read Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
