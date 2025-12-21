import React, { useRef, useEffect, useState } from 'react';
import { PRODUCTS } from '../constants';

const SnackScroll: React.FC = () => {
    // Duplicate products to create a seamless loop effect.
    const scrollingProducts = [...PRODUCTS, ...PRODUCTS];
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const startScrolling = () => {
        intervalRef.current = window.setInterval(() => {
            if (scrollContainerRef.current) {
                const scrollContainer = scrollContainerRef.current;
                const itemWidth = scrollContainer.clientWidth;
                let nextScrollLeft = scrollContainer.scrollLeft + itemWidth;

                if (nextScrollLeft >= scrollContainer.scrollWidth - itemWidth) {
                    scrollContainer.style.scrollBehavior = 'auto';
                    scrollContainer.scrollLeft = 0;
                    scrollContainer.style.scrollBehavior = 'smooth';
                    nextScrollLeft = itemWidth;
                }

                scrollContainer.scrollTo({
                    left: nextScrollLeft,
                    behavior: 'smooth',
                });
            }
        }, 2500);
    };

    const stopScrolling = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const handleScroll = () => {
            if (scrollContainer) {
                const itemWidth = scrollContainer.clientWidth;
                const newIndex = Math.round(scrollContainer.scrollLeft / itemWidth) % PRODUCTS.length;
                setActiveIndex(newIndex);
            }
        };

        startScrolling();
        scrollContainer?.addEventListener('scroll', handleScroll);

        return () => {
            stopScrolling();
            scrollContainer?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col items-center bg-[#F8E9C9]">
            <div
                className="w-3/4 h-[80vh] md:h-[85vh] relative z-20 overflow-hidden group rounded-2xl mx-auto bg-transparent"
                onMouseEnter={stopScrolling}
                onMouseLeave={startScrolling}
            >
                <div ref={scrollContainerRef} className="flex whitespace-nowrap items-center h-full overflow-x-scroll snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {scrollingProducts.map((product, index) => (
                        <div key={index} className={`snap-center inline-block w-full h-full flex-shrink-0 transition-opacity duration-700 ${activeIndex === index % PRODUCTS.length ? 'opacity-100' : 'opacity-60'}`}>
                            <div className="w-full h-full relative flex flex-col">
                                {/* Product Image - Takes more space on mobile */}
                                <div className="flex-1 relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
                                </div>
                                {/* Text Container - Fixed at bottom */}
                                <div className="bg-[#e0c999]/75 border-t-4 border-[#D7A846] px-4 py-4 shadow-lg backdrop-blur-sm whitespace-normal">
                                    <h3 className="text-[#7A0F12] font-serif font-bold text-xl md:text-3xl leading-tight break-words">{product.name}</h3>
                                    <p className="text-[#0F5A2A] text-xs md:text-sm font-semibold uppercase tracking-wider mt-1 break-words">{product.imageAlt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center space-x-2.5 mt-6">
                {PRODUCTS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (scrollContainerRef.current) {
                                scrollContainerRef.current.scrollTo({
                                    left: index * scrollContainerRef.current.clientWidth,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-[#7A0F12] scale-125' : 'bg-[#D7A846]/70 hover:bg-[#D7A846]'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SnackScroll;