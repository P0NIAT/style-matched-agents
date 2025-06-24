
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Luxe Hair Studio",
    quote: "The AI sounds exactly like me! My clients have no idea they're chatting with a bot. It's incredible how it captures my tone.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b12e1fe1?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    business: "Serenity Spa",
    quote: "Our booking rate increased by 60% since using Smart Leads AI. The personal touch in every conversation makes all the difference.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Rachel Green",
    business: "Glow Aesthetic Clinic",
    quote: "I was skeptical at first, but the AI genuinely writes like I do. My clients love the instant responses and seamless booking experience.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            What Beauty Business Owners Say
          </h2>
          <p className="font-opensans text-xl text-gray-600">
            Real feedback from salon owners who've transformed their client communication
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <img 
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mb-6 md:mb-0 md:mr-8 object-cover"
              />
              <div className="flex-1">
                <blockquote className="font-opensans text-lg text-gray-700 mb-4 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <h4 className="font-montserrat font-semibold text-brand-navy">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="font-opensans text-brand-cyan">
                    {testimonials[currentIndex].business}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-brand-cyan' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
