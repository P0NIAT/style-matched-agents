
const integrations = [
  { name: "Instagram", logo: "📷", color: "from-pink-500 to-purple-600" },
  { name: "Facebook Messenger", logo: "💬", color: "from-blue-600 to-blue-700" },
  { name: "WhatsApp", logo: "📱", color: "from-green-500 to-green-600" },
  { name: "Website Plugin", logo: "🌐", color: "from-brand-cyan to-brand-navy" },
  { name: "Google Sheets", logo: "📊", color: "from-green-600 to-green-700" },
  { name: "HubSpot", logo: "🔧", color: "from-orange-500 to-red-500" },
  { name: "Twilio", logo: "📞", color: "from-red-500 to-pink-500" },
  { name: "Calendly", logo: "📅", color: "from-blue-500 to-indigo-600" }
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            Seamless Integrations
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with all your existing tools and platforms. Our AI works wherever your clients are.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={integration.name}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${integration.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl`}>
                {integration.logo}
              </div>
              <h3 className="font-opensans font-semibold text-brand-navy text-sm">
                {integration.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-opensans text-gray-600 mb-6">
            Need a custom integration? We'll build it for you.
          </p>
          <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white font-opensans font-medium px-8">
            Request Integration
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
