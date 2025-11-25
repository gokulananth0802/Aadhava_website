import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import footerBackground from '../images/footer_background.png';
import { KolamPattern } from './ArtAssets';

const Footer: React.FC = () => {
  return (
    <div className="mt-16">
      {/* Decorative top edge */}
      <KolamPattern />
      <footer
        className="text-[#F8E9C9] relative z-10 flex flex-col justify-start"
        style={{
          backgroundImage: `url(${footerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '250px'
        }}
      >
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center w-full">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="font-serif font-bold text-xl mb-1">Aadhava</h3>
            <p className="text-sm opacity-80">Authentic Indian Snacks</p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-[#F8E9C9] hover:text-[#D7A846] transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-[#F8E9C9] hover:text-[#D7A846] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-[#F8E9C9] hover:text-[#D7A846] transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </footer>
      <div className="bg-[#5e0a0d] py-2 text-center">
        <p className="text-xs text-[#F8E9C9]/60">© 2024 Aadhava Food Products. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;