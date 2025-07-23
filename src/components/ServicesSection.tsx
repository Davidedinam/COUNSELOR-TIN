import React from 'react';
import { Button } from '@/components/ui/button';
import marriageCounseling from '@/assets/marriage-counseling.jpg';
import familyTherapy from '@/assets/family-therapy.jpg';
import youthGuidance from '@/assets/youth-guidance.jpg';
import spiritualHealing from '@/assets/spiritual-healing.jpg';
import onlineSessions from '@/assets/online-sessions.jpg';
import crisisSupport from '@/assets/crisis-support.jpg';

const ServicesSection = () => {
  const services = [
    {
      image: marriageCounseling,
      title: "Marriage Counseling",
      description: "Restore intimacy and communication in your relationship through biblical principles and professional guidance.",
      features: ["Couples therapy sessions", "Pre-marital counseling", "Conflict resolution", "Intimacy restoration"]
    },
    {
      image: familyTherapy,
      title: "Family Therapy",
      description: "Strengthen family bonds and resolve conflicts with faith-based approaches to healing and reconciliation.",
      features: ["Family communication", "Parenting guidance", "Sibling relationships", "Generational healing"]
    },
    {
      image: youthGuidance,
      title: "Youth Guidance",
      description: "Support young people through life's challenges with mentorship rooted in Christian values and understanding.",
      features: ["Teen counseling", "Identity formation", "Peer pressure guidance", "Faith development"]
    },
    {
      image: spiritualHealing,
      title: "Deliverance & Healing",
      description: "Experience spiritual freedom and emotional healing through prayer, scripture, and professional support.",
      features: ["Spiritual warfare", "Inner healing", "Trauma recovery", "Prayer ministry"]
    },
    {
      image: onlineSessions,
      title: "Online Sessions",
      description: "Access counseling and spiritual guidance from the comfort of your home through secure video sessions.",
      features: ["Video counseling", "Phone consultations", "Digital resources", "Flexible scheduling"]
    },
    {
      image: crisisSupport,
      title: "Crisis Support",
      description: "Immediate spiritual and emotional support during difficult times with compassionate, biblical guidance.",
      features: ["24/7 prayer line", "Emergency sessions", "Crisis intervention", "Immediate support"]
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/+233123456789?text=Hello Counselor Tina, I would like to learn more about your counseling services.', '_blank');
  };

  return (
    <section id="services" className="section-spiritual bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Ministry & Counseling Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the path to healing through our comprehensive range of faith-based counseling 
            and spiritual guidance services designed to restore hope and strengthen your relationship with God.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-peaceful group hover:shadow-spiritual transition-all duration-300 animate-gentle-scale overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 sm:h-56 md:h-48 lg:h-52 xl:h-56 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                onClick={openWhatsApp}
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-spiritual text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards restoration and peace. I am here 
              to walk alongside you with professional expertise and unwavering faith.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openWhatsApp}
                size="lg"
                className="bg-white text-primary hover:bg-primary-light hover:text-primary-foreground px-8 py-3"
              >
                Book a Session
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;