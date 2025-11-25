import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import AnimatedDiv from '../components/AnimatedDiv';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  align: 'left' | 'right';
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, align, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const dotClasses = `absolute -left-[44px] md:left-1/2 md:-ml-[14px] w-7 h-7 rounded-full z-20 transition-all duration-500
    ${isInView ? 'bg-[#D7A846] border-[#F8E9C9] border-4 shadow-[0_0_15px_#D7A846]' : 'bg-[#7A0F12] border-4 border-[#F8E9C9]'}`;

  const content = (
    <div className={align === 'right' ? 'md:w-[45%] md:pr-12 md:text-right' : 'md:w-[45%] md:pl-12'}>
      <h3 className="text-2xl font-serif font-bold text-[#0F5A2A]">{year}</h3>
      <h4 className="text-xl font-bold text-[#7A0F12] mb-2">{title}</h4>
      <p className="text-[#5e0a0d]">{description}</p>
    </div>
  );

  return (
    <AnimatedDiv delay={delay}>
      <div ref={ref} className="relative md:flex md:justify-between items-center group">
        <div className={dotClasses}></div>
        {align === 'right' ? content : <div className="hidden md:block md:w-[45%]"></div>}
        {align === 'left' ? content : <div className="hidden md:block md:w-[45%]"></div>}
      </div>
    </AnimatedDiv>
  );
};

export default TimelineItem;