import React from 'react';

export const Colors = {
  Maroon: '#7B2226',
  CreamGold: '#EDD3A4',
};

export const LoopingChainPattern = () => (
  <svg width="100%" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <defs>
      <pattern id="chainPattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M0 10 Q 10 0 20 10 T 40 10"
          fill="none"
          stroke={Colors.CreamGold}
          strokeWidth="2"
        />
        <circle cx="20" cy="10" r="2" fill={Colors.CreamGold} />
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#chainPattern)" />
  </svg>
);

export const KolamPattern = () => (
  <svg width="100%" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="bg-[#7B2226]">
    <defs>
      {/* Traditional horizontal kolam chain pattern with curves */}
      <pattern id="kolamPattern" x="0" y="0" width="48" height="24" patternUnits="userSpaceOnUse">
        {/* Top horizontal line */}
        <line x1="0" y1="4" x2="48" y2="4" stroke={Colors.CreamGold} strokeWidth="1.2" opacity="0.9" />

        {/* Bottom horizontal line */}
        <line x1="0" y1="20" x2="48" y2="20" stroke={Colors.CreamGold} strokeWidth="1.2" opacity="0.9" />

        {/* Curved interconnected loop pattern in the middle - wider curves */}
        {/* First curved loop (left) - top curve */}
        <path
          d="M0,12 Q6,5 12,6.5 Q18,8 24,12"
          fill="none"
          stroke={Colors.CreamGold}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* First curved loop (left) - bottom curve */}
        <path
          d="M0,12 Q6,19 12,17.5 Q18,16 24,12"
          fill="none"
          stroke={Colors.CreamGold}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Second curved loop (right) - top curve */}
        <path
          d="M24,12 Q30,5 36,6.5 Q42,8 48,12"
          fill="none"
          stroke={Colors.CreamGold}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Second curved loop (right) - bottom curve */}
        <path
          d="M24,12 Q30,19 36,17.5 Q42,16 48,12"
          fill="none"
          stroke={Colors.CreamGold}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Center dots inside each loop */}
        <circle cx="12" cy="12" r="1.5" fill={Colors.CreamGold} opacity="0.95" />
        <circle cx="36" cy="12" r="1.5" fill={Colors.CreamGold} opacity="0.95" />

        {/* Connecting dots at intersections */}
        <circle cx="0" cy="12" r="1.2" fill={Colors.CreamGold} opacity="0.9" />
        <circle cx="24" cy="12" r="1.2" fill={Colors.CreamGold} opacity="0.9" />
        <circle cx="48" cy="12" r="1.2" fill={Colors.CreamGold} opacity="0.9" />

        {/* Add chalky texture overlay for authenticity */}
        <path
          d="M0,12 Q6,5 12,6.5 Q18,8 24,12"
          fill="none"
          stroke={Colors.CreamGold}
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M0,12 Q6,19 12,17.5 Q18,16 24,12"
          fill="none"
          stroke={Colors.CreamGold}
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M24,12 Q30,5 36,6.5 Q42,8 48,12"
          fill="none"
          stroke={Colors.CreamGold}
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M24,12 Q30,19 36,17.5 Q42,16 48,12"
          fill="none"
          stroke={Colors.CreamGold}
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.4"
        />
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#kolamPattern)" />
  </svg>
);

export const SpiralSunIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke={Colors.CreamGold} strokeWidth="3">
    {/* Sun Body */}
    <circle cx="50" cy="50" r="20" />
    {/* Spiral */}
    <path d="M50 50 m-10 0 a 5 5 0 1 0 10 0 a 10 10 0 1 0 -20 0 a 15 15 0 1 0 30 0" strokeLinecap="round" />
    {/* Rays */}
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1="50"
        y1="25"
        x2="50"
        y2="10"
        transform={`rotate(${i * 30} 50 50)`}
      />
    ))}
  </svg>
);

export const AuthenticTexture = () => (
  <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
    <svg width="100%" height="100%">
      <defs>
        <pattern id="authenticText" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#authenticText)" />
    </svg>
  </div>
);

export const RuralScene = () => (
  <svg viewBox="0 0 800 150" className="w-full h-auto" preserveAspectRatio="xMidYMax slice">
    {/* Ground Line */}
    <path d="M0 140 Q 200 135 400 140 T 800 140" stroke={Colors.CreamGold} strokeWidth="2" fill="none" />

    {/* Woman Cooking (Left) */}
    <g transform="translate(100, 90)">
      {/* Body (Warli Style) */}
      <path d="M0 0 L -10 20 L 10 20 Z" fill={Colors.CreamGold} /> {/* Upper body */}
      <path d="M0 20 L -15 45 L 15 45 Z" fill={Colors.CreamGold} /> {/* Skirt */}
      <circle cx="0" cy="-5" r="4" fill={Colors.CreamGold} /> {/* Head */}
      {/* Arms */}
      <path d="M-5 10 L -15 25" stroke={Colors.CreamGold} strokeWidth="2" />
      <path d="M5 10 L 15 25" stroke={Colors.CreamGold} strokeWidth="2" />
      {/* Stove & Pot */}
      <rect x="15" y="35" width="15" height="10" fill="none" stroke={Colors.CreamGold} strokeWidth="2" />
      <path d="M15 35 A 7.5 5 0 0 1 30 35" fill="none" stroke={Colors.CreamGold} strokeWidth="2" />
    </g>

    {/* Farmer Ploughing (Center) */}
    <g transform="translate(350, 80)">
      {/* Farmer */}
      <g transform="translate(0, 0)">
        <path d="M0 0 L -8 15 L 8 15 Z" fill={Colors.CreamGold} />
        <path d="M0 15 L -8 35 L 8 35 Z" fill={Colors.CreamGold} />
        <circle cx="0" cy="-5" r="4" fill={Colors.CreamGold} />
        <path d="M5 10 L 25 20" stroke={Colors.CreamGold} strokeWidth="2" /> {/* Arm holding plough */}
      </g>
      {/* Oxen (Simplified) */}
      <g transform="translate(40, 10)">
        <path d="M0 10 L 30 10 L 30 25 L 0 25 Z" fill="none" stroke={Colors.CreamGold} strokeWidth="2" /> {/* Body */}
        <path d="M30 10 L 40 5 L 40 20 Z" fill={Colors.CreamGold} /> {/* Head */}
        <path d="M0 25 L -5 35" stroke={Colors.CreamGold} strokeWidth="2" /> {/* Leg */}
        <path d="M25 25 L 25 35" stroke={Colors.CreamGold} strokeWidth="2" /> {/* Leg */}
      </g>
      {/* Plough */}
      <line x1="10" y1="35" x2="40" y2="20" stroke={Colors.CreamGold} strokeWidth="2" />
    </g>

    {/* Cyclist (Right) */}
    <g transform="translate(600, 80)">
      {/* Wheels */}
      <circle cx="0" cy="40" r="12" fill="none" stroke={Colors.CreamGold} strokeWidth="2" />
      <circle cx="45" cy="40" r="12" fill="none" stroke={Colors.CreamGold} strokeWidth="2" />
      {/* Frame */}
      <path d="M0 40 L 20 20 L 45 40 M 20 20 L 15 40 M 20 20 L 35 20" stroke={Colors.CreamGold} strokeWidth="2" fill="none" />
      {/* Person */}
      <g transform="translate(20, 0)">
        <path d="M0 0 L -6 15 L 6 15 Z" fill={Colors.CreamGold} />
        <path d="M0 15 L -6 30 L 6 30 Z" fill={Colors.CreamGold} />
        <circle cx="0" cy="-5" r="4" fill={Colors.CreamGold} />
        <path d="M0 10 L 15 20" stroke={Colors.CreamGold} strokeWidth="2" /> {/* Hands to handle */}
      </g>
    </g>
  </svg>
);
