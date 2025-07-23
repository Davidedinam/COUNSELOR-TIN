import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, Heart } from 'lucide-react';
import heroImage from '/img/spiritual-healing.jpg';

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hello, I would like to book a counseling session with Counselor Tina.', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Find Peace & Healing
            <span className="block text-primary-glow">Through Faith</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to a safe space where your spiritual journey meets professional counseling. 
            Experience God's love through compassionate guidance and biblical wisdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={openWhatsApp}
              className="btn-spiritual text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            
            <Button
              onClick={() => scrollToSection('services')}
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-4"
            >
              <Heart className="w-5 h-5 mr-2" />
              Our Services
            </Button>
          </div>

          {/* Spiritual Quote */}
          <div className="animate-peaceful-slide">
            <blockquote className="text-white/80 text-lg italic font-playfair max-w-3xl mx-auto">
              "Come to me, all you who are weary and burdened, and I will give you rest."
              <footer className="text-primary-glow mt-2 not-italic font-medium">
                - Matthew 11:28
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;