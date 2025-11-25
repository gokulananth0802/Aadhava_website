import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';

// SVG Shapes representing abstract snacks
const SnackShapes = {
  Mixture: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2" className="w-full h-full opacity-30">
      <path d="M2 12h20M12 2v20M4 4l16 16M4 20L20 4" />
    </svg>
  ),
  Spiral: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2" className="w-full h-full opacity-30">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 18c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z" />
      <path d="M12 14c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" />
    </svg>
  ),
  Chip: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2" className="w-full h-full opacity-30">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Stick: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="3" className="w-full h-full opacity-30">
      <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" />
    </svg>
  )
};

const FloatingSnacks: React.FC = () => {
  // Generate random positions and animation params for simulated snacks
  const snacks = Array.from({ length: 20 }).map((_, i) => {
    const shapes = [SnackShapes.Mixture, SnackShapes.Spiral, SnackShapes.Chip, SnackShapes.Stick];
    const RandomShape = shapes[i % shapes.length];
    return {
      id: i,
      Shape: RandomShape,
      initialX: Math.random() * 100, // percentage
      initialY: Math.random() * 100, // percentage
      duration: 20 + Math.random() * 40, // 20-60s
      delay: Math.random() * -20, // Start at different times in cycle
      scale: 0.5 + Math.random() * 0.5, // 0.5 - 1.0 scale
      rotate: Math.random() * 360,
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#F8E9C9]/20">
      {snacks.map((snack) => (
        <motion.div
          key={snack.id}
          className="absolute text-amber-700 opacity-20"
          style={{
            left: `${snack.initialX}%`,
            top: `${snack.initialY}%`,
            width: '60px',
            height: '60px',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            rotate: [snack.rotate, snack.rotate + 360],
          }}
          transition={{
            duration: snack.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <snack.Shape />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSnacks;