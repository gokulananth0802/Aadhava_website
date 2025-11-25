import aadhavaLogo from '../images/Aadhava_logo.jpg';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <nav className="sticky top-0 z-50 w-full bg-[#7A0F12] shadow-lg border-b-4 border-[#D7A846]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center space-x-2 group cursor-pointer">
            <div className="w-12 h-12 bg-[#F8E9C9] rounded-full flex items-center justify-center border-2 border-[#D7A846]">
                <img src={aadhavaLogo} alt="Aadhava Logo" className="w-10 h-10" />
            </div>
            <Link to="/" className="flex flex-col">
                <span className="text-[#F8E9C9] font-serif text-2xl tracking-wider font-bold leading-none">AADHAVA</span>
                <span className="text-[#D7A846] text-xs tracking-widest uppercase">Authentic Snacks</span>
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-lg font-medium transition-colors duration-200 font-serif
                    ${isActive(link.path) ? 'text-[#D7A846]' : 'text-[#F8E9C9] hover:text-[#D7A846]'}
                  `}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D7A846] transform origin-left transition-transform duration-300" />
                  )}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#F8E9C9] hover:text-white hover:bg-[#A52A2A] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                  ${isActive(link.path) ? 'bg-[#D7A846] text-[#7A0F12]' : 'text-[#F8E9C9] hover:bg-[#A52A2A] hover:text-white'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Decorative bottom edge */}
      <div className="h-1 w-full bg-[repeating-linear-gradient(90deg,#D7A846,#D7A846_10px,#7A0F12_10px,#7A0F12_20px)]"></div>
    </nav>
  );
};

export default Navbar;