
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Luxe Hair Studio",
    quote: "The AI sounds exactly like me! My clients have no idea they're chatting with a bot. It's captured my warm, bubbly personality perfectly. I'm getting 40% more bookings now!",
    image: "https://pixabay.com/pl/photos/pi%C4%99kny-pi%C4%99kne-dziewczyny-odzie%C5%BC-2576846",
    rating: 5
  },
  {
    name: "Emma Thompson",
    business: "Serenity Spa & Beauty",
    quote: "Finally, an AI that gets the beauty industry! It knows exactly what questions to ask about skincare concerns and treatment preferences. My clients feel so understood.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Rachel Green",
    business: "Glow Aesthetic Clinic",
    quote: "I was skeptical at first, but this AI genuinely sounds like me! It uses my exact phrases and even adds the little heart emojis I always use. My clients love the instant responses! 💕",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    rating: 5
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-brand-soft to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            Beauty Business Owners Love Us ✨
          </h2>
          <p className="font-opensans text-xl text-gray-600">
            Real stories from salon owners who've transformed their client experience
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-gold/10 to-brand-cyan/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="flex flex-col md:flex-row items-center text-center md:text-left relative z-10">
              <div className="mb-6 md:mb-0 md:mr-8">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-brand-gold shadow-lg"
                />
              </div>
              
              <div className="flex-1">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
                  ))}
                </div>
                
                <blockquote className="font-opensans text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <h4 className="font-montserrat font-bold text-xl text-brand-navy">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="font-opensans text-brand-cyan font-medium">
                    Owner, {testimonials[currentIndex].business}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-all duration-300 border border-pink-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-all duration-300 border border-pink-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-brand-cyan w-8' : 'bg-pink-200'
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
