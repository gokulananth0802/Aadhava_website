import aadhavaLogo from '../images/Aadhava_logo.jpg';
import headerBackground from '../images/header_background.png';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LoopingChainPattern, SpiralSunIcon, AuthenticTexture, Colors, KolamPattern } from './ArtAssets';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full shadow-lg relative overflow-hidden"
      style={{
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <AuthenticTexture />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Area */}
          <div
            className={`flex-shrink-0 flex items-center space-x-3 group cursor-pointer transition-transform duration-300 md:transform-none ${isOpen ? 'transform translate-y-3' : ''}`}
          >
            <SpiralSunIcon className="w-8 h-8 text-[#EDD3A4] animate-spin-slow" />
            <div className="w-12 h-12 bg-[#EDD3A4] rounded-full flex items-center justify-center border-2 border-[#EDD3A4]">
              <img src={aadhavaLogo} alt="Aadhava Logo" className="w-10 h-10 rounded-full" />
            </div>
            <Link to="/" className="flex flex-col">
              <span className="text-[#EDD3A4] font-serif text-2xl tracking-wider font-bold leading-none">AADHAVA</span>
              <span className="text-[#EDD3A4] text-xs tracking-widest uppercase">Authentic Snacks</span>
            </Link>
            <SpiralSunIcon className="w-8 h-8 text-[#EDD3A4] animate-spin-slow" />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-lg font-medium transition-colors duration-200 font-serif
                    ${isActive(link.path) ? 'text-[#EDD3A4]' : 'text-[#EDD3A4] hover:text-white'}
                  `}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EDD3A4] transform origin-left transition-transform duration-300" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#EDD3A4] hover:text-white hover:bg-[#5e1a1d] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EDD3A4]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium font-serif
                  ${isActive(link.path) ? 'bg-[#EDD3A4] text-[#7B2226]' : 'text-[#EDD3A4] hover:bg-[#5e1a1d] hover:text-white'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Decorative bottom edge */}
      <div className="w-full">
        <KolamPattern />
      </div>
    </nav>
  );
};

export default Navbar;