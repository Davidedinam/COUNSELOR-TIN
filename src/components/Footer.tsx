import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Brand */}
          <h3 className="text-2xl font-playfair font-bold">
            Counselor Tina
          </h3>
          

          {/* Copyright */}
          <div className="text-primary-foreground/80 text-sm">
            © 2025 Counselor Tina. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;