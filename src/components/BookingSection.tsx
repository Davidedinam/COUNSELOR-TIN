import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const sessionTypes = [
    'Marriage Counseling',
    'Family Therapy',
    'Youth Guidance',
    'Spiritual Healing',
    'Online Session',
    'Crisis Support'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.sessionType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const bookingMessage = `Hello Counselor Tina,

I would like to book a session with the following details:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Session Type:* ${formData.sessionType}
*Preferred Date:* ${formData.preferredDate || 'Flexible'}
*Preferred Time:* ${formData.preferredTime || 'Flexible'}

*Additional Message:*
${formData.message || 'No additional message'}

Thank you!`;

    const whatsappUrl = `https://wa.me/+233123456789?text=${encodeURIComponent(bookingMessage)}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      sessionType: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });

    toast({
      title: "Booking Request Sent!",
      description: "Your booking request has been sent via WhatsApp. I'll confirm your appointment shortly.",
    });
  };

  return (
    <section id="booking" className="section-spiritual bg-gradient-peaceful">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-peaceful-slide">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Book Your Session
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards healing and spiritual growth. Schedule your personalized counseling session today.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-spiritual animate-gentle-scale">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                  <User className="w-4 h-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Session Type */}
              <div className="space-y-2">
                <Label htmlFor="sessionType" className="flex items-center gap-2 text-foreground">
                  <MessageCircle className="w-4 h-4" />
                  Session Type *
                </Label>
                <select
                  id="sessionType"
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select a session type</option>
                  {sessionTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <Label htmlFor="preferredDate" className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-4 h-4" />
                  Preferred Date
                </Label>
                <Input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                />
              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <Label htmlFor="preferredTime" className="flex items-center gap-2 text-foreground">
                  <Clock className="w-4 h-4" />
                  Preferred Time
                </Label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select preferred time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Additional Message (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Share any specific concerns or questions you'd like to discuss..."
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button type="submit" className="btn-spiritual w-full md:w-auto px-8">
                <Send className="w-4 h-4 mr-2" />
                Send Booking Request
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Your booking request will be sent via WhatsApp for quick confirmation
              </p>
            </div>
          </form>
        </div>

        {/* Office Hours */}
        <div className="mt-12 text-center animate-peaceful-slide">
          <div className="bg-card border border-border rounded-xl p-6 inline-block">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
              Office Hours
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed (Emergency calls accepted)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;