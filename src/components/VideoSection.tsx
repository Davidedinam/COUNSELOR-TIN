import React from 'react';
import { Play, Heart, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="section-spiritual bg-gradient-peaceful">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Experience God's Love Through Healing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch testimonies of transformation and discover how faith-based counseling 
            can bring restoration to your life and relationships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Container */}
          <div className="relative animate-gentle-scale">
            <div className="aspect-video bg-card rounded-2xl overflow-hidden shadow-spiritual group cursor-pointer">
              {!isVideoPlaying ? (
                <div 
                  className="relative w-full h-full bg-gradient-to-br from-primary/20 to-primary-light/30 flex items-center justify-center"
                  onClick={handleVideoClick}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                      Testimonies of Transformation
                    </h3>
                    <p className="text-white/90">Click to watch inspiring stories</p>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Testimonies of Transformation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-foreground">
                Stories of Hope & Healing
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Witness the powerful testimonies of individuals and families who have found 
                healing through faith-based counseling. Each story is a testament to God's 
                transformative love and the power of professional Christian guidance.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">98%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
              
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">500+</div>
                <div className="text-xs text-muted-foreground">Lives Changed</div>
              </div>
              
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">10+</div>
                <div className="text-xs text-muted-foreground">Years Serving</div>
              </div>
            </div>

            <div className="card-peaceful bg-primary-light/20">
              <blockquote className="text-foreground font-playfair italic mb-4">
                "Through counseling with Tina, I found not just healing for my marriage, 
                but a deeper relationship with God that transformed every area of my life."
              </blockquote>
              <footer className="text-primary font-medium">- Sarah M., Marriage Restored</footer>
            </div>

            <Button 
              onClick={() => window.open('https://wa.me/+233123456789?text=Hello Counselor Tina, I would like to book a session.', '_blank')}
              className="w-full"
            >
              Start Your Healing Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;