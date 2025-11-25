import React from 'react';
import EmailOrderBanner from '../components/EmailOrderBanner';
import SnackScroll from '../components/SnackScroll';
import { PRODUCTS } from '../constants';
import AnimatedDiv from '../components/AnimatedDiv';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <EmailOrderBanner />

      {/* Hero Section - Replaced with Scrolling Export Products */}
      <section className="relative w-full bg-transparent px-0 overflow-hidden flex flex-col justify-center items-center pt-16 pb-16">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/paisley.png')] pointer-events-none"></div>



        {/* The Scrolling Marquee acting as Hero Image */}
        <AnimatedDiv className="w-full relative z-10">
          <SnackScroll />
        </AnimatedDiv>
      </section>

      {/* Product Showcase Grid */}
      <section className=" px-4 max-w-7xl mx-auto relative z-10">
        <AnimatedDiv className="text-center mb-16">
          <h3 className="text-4xl font-serif font-bold text-[#7A0F12] mb-4 relative inline-block">
            <span className="absolute -left-8 top-1/2 w-6 h-1 bg-[#D7A846]"></span>
            Our Featured Selection
            <span className="absolute -right-8 top-1/2 w-6 h-1 bg-[#D7A846]"></span>
          </h3>
          <p className="text-[#0F5A2A] font-medium italic">Handcrafted with love and tradition</p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <AnimatedDiv key={product.id} delay={index * 0.1}>
              <div className="group relative bg-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-[#7A0F12] h-full">
                {/* Decorative corner accents for cards */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#D7A846] z-10 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#D7A846] z-10 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#D7A846] z-10 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#D7A846] z-10 rounded-br-lg"></div>

                        <div className="p-8 flex flex-col items-center text-center h-full justify-between bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]">
                            <div className="w-48 h-48 rounded-full bg-[#7A0F12] border-4 border-[#D7A846] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 overflow-hidden relative shadow-inner">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700" />
                  </div>

                  <div className="relative z-10">
                    <div className="text-[#D7A846] text-xs font-bold tracking-widest uppercase mb-2 bg-[#7A0F12] inline-block px-2 py-1 rounded">Authentic Taste</div>
                    <h4 className="text-3xl font-serif font-bold text-[#0F5A2A] mb-2">{product.name}</h4>
                    <p className="text-[#7A0F12] text-sm font-medium italic">{product.imageAlt}</p>
                  </div>

                  <div className="mt-6 w-full border-t border-[#7A0F12]/30 pt-4 flex justify-between items-center text-xs font-bold text-[#7A0F12] relative z-10">
                    <span>Since 2023</span>
                    <span>100% Natural</span>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
