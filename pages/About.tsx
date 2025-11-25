import React from 'react';
import { History, Award, Heart, Globe } from 'lucide-react';
import AnimatedDiv from '../components/AnimatedDiv';
import TimelineItem from './TimelineItem';

const About: React.FC = () => {
  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block border-b-4 border-[#7A0F12] pb-2 mb-4">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#7A0F12]">Our Story</h1>
        </div>
        <p className="text-xl text-[#0F5A2A] font-serif italic">The Authentic Journey of Aadhava</p>
      </div>

      {/* Content Section 1: Process */}
      <AnimatedDiv className="mb-16 bg-[#F8E9C9] border-4 border-[#7A0F12] rounded-lg p-8 sm:p-12 shadow-xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#D7A846,#D7A846_10px,#7A0F12_10px,#7A0F12_20px)]"></div>
         <div className="absolute bottom-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#D7A846,#D7A846_10px,#7A0F12_10px,#7A0F12_20px)]"></div>
         
         <div className="md:flex items-center gap-12">
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                <div className="w-48 h-48 rounded-full bg-[#7A0F12] flex items-center justify-center border-8 border-[#D7A846] shadow-inner">
                    <Heart size={80} className="text-[#F8E9C9]" />
                </div>
            </div>
            <div className="md:w-2/3">
                <h2 className="text-3xl font-serif font-bold text-[#0F5A2A] mb-6 border-b-2 border-[#D7A846] inline-block">Our Authentic Way of Making Snacks</h2>
                <div className="space-y-4 text-lg text-[#5e0a0d] leading-relaxed font-medium">
                    <p>
                        At Aadhava, we believe that the soul of a snack lies in its preparation. We hand-select premium quality ingredients directly from farmers, ensuring every spice and lentil meets our rigorous standards.
                    </p>
                    <p>
                        Our kitchen follows time-honored family recipes passed down through generations. We use traditional cooking techniques, carefully controlling temperatures in open vats to achieve that perfect golden crunch and flavor balance that machines simply cannot replicate.
                    </p>
                    <p>
                        We are proud to say that our snacks are free from artificial preservatives and colors. Every batch undergoes a strict quality check by our skilled artisans, ensuring that you experience the true taste of tradition in every bite.
                    </p>
                </div>
            </div>
         </div>
      </AnimatedDiv>

      {/* Content Section 2: Heritage Timeline */}
      <div className="mb-20">
         <AnimatedDiv>
            <h2 className="text-3xl font-serif font-bold text-[#7A0F12] text-center mb-12">Our Heritage</h2>
         </AnimatedDiv>
         <div className="relative border-l-4 border-[#D7A846] ml-4 md:ml-1/2 pl-8 md:pl-0 space-y-12">
            
            <TimelineItem
              year="2023"
              title="The Beginning"
              description="Founded with a vision to bring authentic South Indian snacks to global markets. Started as a small-scale traditional kitchen in Tamil Nadu."
              align="right"
            />
            <TimelineItem
              year="Growth"
              title="Rapid Expansion"
              description="Gained rapid popularity due to our commitment to genuine taste. Expanded our operations to serve customers across India."
              align="left"
              delay={0.2}
            />
            <TimelineItem
              year="Today"
              title="Going Global"
              description="Now exporting to Singapore and Canada, serving thousands of happy customers while maintaining our strict traditional quality."
              align="right"
              delay={0.2}
            />
         </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <AnimatedDiv className="bg-[#7A0F12] text-[#F8E9C9] p-8 rounded-xl border-4 border-[#D7A846] text-center transform hover:-translate-y-2 transition-transform">
             <History size={48} className="mx-auto mb-4 text-[#D7A846]" />
             <div className="text-4xl font-bold font-serif mb-2">Since 2023</div>
             <div className="text-sm uppercase tracking-widest">Years of Authenticity</div>
         </AnimatedDiv>
         <AnimatedDiv className="bg-[#0F5A2A] text-[#F8E9C9] p-8 rounded-xl border-4 border-[#D7A846] text-center transform hover:-translate-y-2 transition-transform" delay={0.1}>
            
             <Award size={48} className="mx-auto mb-4 text-[#D7A846]" />
             <div className="text-4xl font-bold font-serif mb-2">6+</div>
             <div className="text-sm uppercase tracking-widest">Signature Products</div>
         </AnimatedDiv>
         <AnimatedDiv className="bg-[#7A0F12] text-[#F8E9C9] p-8 rounded-xl border-4 border-[#D7A846] text-center transform hover:-translate-y-2 transition-transform" delay={0.2}>
             <Globe size={48} className="mx-auto mb-4 text-[#D7A846]" />
             <div className="text-4xl font-bold font-serif mb-3 mt-2">3</div>
             <div className="text-sm uppercase tracking-widest">Countries Served</div>
         </AnimatedDiv>
      </div>

    </div>
  );
};

export default About;