import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "The Utavu Foundation's research methodology and capacity building programs have been instrumental in scaling our health innovation across three countries. Their evidence-based approach ensures sustainable impact.",
      author: "Dr. Sarah Kimani",
      position: "Director of Innovation",
      organization: "East Africa Health Consortium",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "Working with Utavu Foundation transformed our agricultural research from concept to implementation. Their prototyping lab and mentorship program helped us reach over 10,000 farmers in our first year.",
      author: "James Mwangi",
      position: "Founder & CEO",
      organization: "AgriTech Solutions Kenya",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "The partnership with Utavu Foundation has been transformative for our education technology initiative. Their evaluation framework helped us demonstrate 40% improvement in learning outcomes.",
      author: "Prof. Amina Hassan",
      position: "Research Director",
      organization: "African Education Innovation Hub",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "Utavu Foundation's incubation program provided the perfect blend of technical support and strategic guidance. We successfully launched our environmental monitoring platform in six countries.",
      author: "Michael Ochieng",
      position: "Co-founder",
      organization: "EcoWatch Africa",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from the innovators, researchers, and organizations we've supported 
            in their journey to create meaningful impact.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="flex items-start space-x-6">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <Quote className="w-12 h-12 text-accent" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <blockquote className="text-xl lg:text-2xl leading-relaxed text-gray-100">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-lg text-white">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-gray-300">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-accent font-medium">
                      {testimonials[currentIndex].organization}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-accent' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Additional Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white/5 rounded-xl p-6 border border-white/10 cursor-pointer transition-all hover:bg-white/10 ${
                index === currentIndex ? 'ring-2 ring-accent' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-white text-sm">{testimonial.author}</div>
                  <div className="text-gray-400 text-xs">{testimonial.organization}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm line-clamp-3">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;