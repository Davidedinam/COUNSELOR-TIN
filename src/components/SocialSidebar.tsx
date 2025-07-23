import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 pr-4">
      <div className="bg-background/90 backdrop-blur-sm border border-border rounded-l-lg shadow-lg p-2 space-y-3">
        <a 
          href="https://facebook.com/counselortina" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          title="Follow on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a 
          href="https://instagram.com/counselortina" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          title="Follow on Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a 
          href="https://youtube.com/@counselortina" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          title="Subscribe on YouTube"
        >
          <Youtube className="w-4 h-4" />
        </a>
        <a 
          href="https://wa.me/+233123456789" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;