import React from 'react';
import { Heart, Star, Users, Award } from 'lucide-react';
import counselingBg from '@/assets/counseling-bg.jpg';
import counselorTinaPhoto from '/img/about.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-spiritual bg-gradient-peaceful">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-peaceful-slide">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground">
                Meet Counselor Tina
              </h2>
              <p className="text-xl text-primary font-medium">
                A Heart Called to Heal & Restore
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in Christian mentorship, 
                I have dedicated my life to helping individuals and families find healing 
                through the transformative power of God's love.
              </p>
              
              <p>
                My approach combines professional techniques with biblical wisdom, 
                creating a safe and nurturing environment where clients can explore their challenges 
                while growing closer to their faith.
              </p>

              <p>
                Whether you're facing relationship difficulties, spiritual questions, or life transitions, 
                I provide compassionate guidance rooted in Christian principles and professional expertise.
              </p>
            </div>

          </div>

          {/* Image */}
          <div className="relative animate-gentle-scale">
            <div className="relative overflow-hidden rounded-2xl shadow-spiritual">
              <img 
                src={counselorTinaPhoto} 
                alt="Counselor Tina" 
                className="w-full h-[500px] lg:h-[600px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 -left-6 max-w-sm bg-card border border-border rounded-xl p-6 shadow-spiritual">
              <blockquote className="text-foreground font-playfair italic">
                "In every counseling session, I see God's hand at work, bringing hope where there was despair."
              </blockquote>
              <footer className="text-primary font-medium mt-2">- Counselor Tina</footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;