import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [wasInView, setWasInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isInView = rect.top < windowHeight * 0.85 && rect.bottom > windowHeight * 0.15;

      if (isInView && !wasInView) {
        // Element is entering the viewport
        if (scrollingDown) {
          // Scrolling down: new element comes from below, fades in moving up
          controls.set({ opacity: 0, y: 60 });
          controls.start({ opacity: 1, y: 0 });
        } else {
          // Scrolling up: element comes from above, fades in moving down
          controls.set({ opacity: 0, y: -60 });
          controls.start({ opacity: 1, y: 0 });
        }
        setWasInView(true);
      } else if (!isInView && wasInView) {
        // Element is leaving the viewport
        if (scrollingDown) {
          // Scrolling down: element goes up, fades out moving up
          controls.start({ opacity: 0, y: -60 });
        } else {
          // Scrolling up: element goes down, fades out moving down
          controls.start({ opacity: 0, y: 60 });
        }
        setWasInView(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Initial check
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isInView = rect.top < windowHeight * 0.85 && rect.bottom > windowHeight * 0.15;

      if (isInView) {
        controls.set({ opacity: 1, y: 0 });
        setWasInView(true);
      } else {
        controls.set({ opacity: 0, y: 60 });
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, wasInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.5, delay: delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
