import React from 'react';
import { Mail } from 'lucide-react';
import { EMAIL_TEMPLATE, COLORS } from '../constants';

const EmailOrderBanner: React.FC = () => {
  const mailtoLink = `mailto:${EMAIL_TEMPLATE.to}?subject=${encodeURIComponent(EMAIL_TEMPLATE.subject)}&body=${encodeURIComponent(EMAIL_TEMPLATE.body)}`;

  return (
    <div className="w-full bg-[#0F5A2A] border-b-4 border-[#D7A846] py-4 px-4 text-center relative overflow-hidden shadow-xl z-40">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
      <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <span className="text-[#F8E9C9] font-bold text-lg sm:text-xl font-serif tracking-wide">
          Ready to experience authentic taste?
        </span>
        <a
          href={mailtoLink}
          className="group relative inline-flex items-center gap-2 bg-[#F8E9C9] text-[#7A0F12] px-6 py-2 rounded-full font-bold border-2 border-[#D7A846] hover:bg-[#D7A846] hover:text-[#7A0F12] transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Mail size={20} />
          <span>Click Here to Order via Email</span>
          <span className="absolute -inset-1 rounded-full border border-[#D7A846] opacity-0 group-hover:opacity-100 animate-ping"></span>
        </a>
      </div>
    </div>
  );
};

export default EmailOrderBanner;