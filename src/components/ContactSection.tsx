import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello Counselor Tina,

My name is ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}

I would like to schedule a counseling session. Please let me know your availability.

Thank you and God bless!`;

    const whatsappUrl = `https://wa.me/+233123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    toast({
      title: "Message Sent!",
      description: "Your message has been sent via WhatsApp. I'll respond shortly.",
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+233123456789?text=Hello, I would like to speak with Counselor Tina about booking a session.', '_blank');
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "+1 (234) 567-8900",
      action: openWhatsApp,
      description: "Quick response guaranteed"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (234) 567-8900", 
      action: () => window.open('tel:+12345678900'),
      description: "For immediate support"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "tina@spiritualhealing.com",
      action: () => window.open('mailto:tina@spiritualhealing.com'),
      description: "Professional inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Virtual & In-Person Sessions",
      action: null,
      description: "Flexible meeting options"
    }
  ];

  return (
    <section id="contact" className="section-spiritual bg-gradient-peaceful">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Connect & Begin Healing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards spiritual restoration and emotional healing. 
            I'm here to support you with compassion, wisdom, and unwavering faith.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-peaceful-slide">
            <div className="card-peaceful">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share what brings you here today. How can I support you on your spiritual journey?"
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-spiritual w-full text-lg py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your message will be sent via WhatsApp for faster response. 
                  All communications are kept strictly confidential.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-gentle-scale">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="card-peaceful bg-card/60 hover:bg-card hover:shadow-peaceful transition-all duration-300 cursor-pointer"
                  onClick={contact.action || undefined}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-spiritual rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair font-semibold text-foreground mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {contact.detail}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="card-peaceful bg-primary-light/10 border border-primary/20">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-semibold text-foreground mb-3">
                    Counseling Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="text-foreground font-medium">Emergency Only</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="text-muted-foreground">WhatsApp Support:</span>
                      <span className="text-primary font-medium">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="card-peaceful bg-accent-warm/20 border border-accent/30">
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-accent-foreground flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-semibold text-foreground mb-2">
                    Crisis Support
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    If you're experiencing a spiritual or emotional crisis, I'm available for immediate support.
                  </p>
                  <Button 
                    onClick={openWhatsApp}
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent-foreground hover:bg-accent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Immediate Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;