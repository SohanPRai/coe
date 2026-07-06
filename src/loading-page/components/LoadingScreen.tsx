import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ProgressRing } from './ProgressRing';

// Inline rendering of the SVG assets to allow seamless CSS animations and class targeting
import '../styles/loading.css';
import '../animations/logo-draw.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic interactive spotlight based on mouse coordinates
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setSpotlightPos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Organic loading progress curve simulation
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 4000; // Total load sequence duration of 4 seconds

    const animateProgress = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Easing curve (ease-out cubic / expo combo for organic ramp)
      // Starts fast, slows down towards 90%, then finishes cleanly at 100%
      let currentProgress = 0;
      if (progressRatio < 0.3) {
        // Fast start
        currentProgress = (progressRatio / 0.3) * 45;
      } else if (progressRatio < 0.8) {
        // Slow middle
        const ratio = (progressRatio - 0.3) / 0.5;
        currentProgress = 45 + ratio * 45; // up to 90%
      } else {
        // Finishing line
        const ratio = (progressRatio - 0.8) / 0.2;
        currentProgress = 90 + ratio * 10;
      }

      setProgress(currentProgress);

      if (progressRatio < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        // Finished loading! Pause briefly at 100% then transition out
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    const animFrame = requestAnimationFrame(animateProgress);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  return (
    <motion.div
      ref={containerRef}
      className="loading-container select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Grid Background Overlay Layer (04-grid-overlay) */}
      <div className="grid-container pointer-events-none opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true" role="presentation">
          <defs>
            <pattern id="smallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(248, 250, 252, 0.015)" stroke-width="0.5" />
            </pattern>
            <pattern id="grid" width="150" height="150" patternUnits="userSpaceOnUse">
              <rect width="150" height="150" fill="url(#smallGrid)" />
              <path d="M 150 0 L 0 0 0 150" fill="none" stroke="rgba(234, 179, 8, 0.03)" stroke-width="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 2. Interactive Ambient Radial Spotlight (03-glow-orb) */}
      <div 
        className="glow-container transition-transform duration-300 ease-out"
        style={{
          transform: `translate(-50%, -50%) translate(${(spotlightPos.x - 50) * 0.15}px, ${(spotlightPos.y - 50) * 0.15}px)`,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%" aria-hidden="true" role="presentation">
          <defs>
            <radialGradient id="radial-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.14" />
              <stop offset="50%" stop-color="#d97706" stop-opacity="0.04" />
              <stop offset="100%" stop-color="#030712" stop-opacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="400" r="400" fill="url(#radial-glow)" />
        </svg>
      </div>

      {/* 3. Main Center Display Content Container */}
      <div className="content-container">
        {/* CoE Logo (01-coe-logo) */}
        <div className="logo-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full" role="img" aria-label="Center of Excellence Shield Emblem">
            <defs>
              <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fbbf24" />
                <stop offset="50%" stop-color="#f59e0b" />
                <stop offset="100%" stop-color="#b45309" />
              </linearGradient>
              <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Hex borders */}
            <path 
              id="outer-hexagon" 
              className="draw-path" 
              d="M 100 15 L 173.6 57.5 L 173.6 142.5 L 100 185 L 26.4 142.5 L 26.4 57.5 Z" 
              fill="none" 
              stroke="url(#gold-grad)" 
              stroke-width="2.5" 
              stroke-linecap="round"
              stroke-linejoin="round"
              filter="url(#neon-glow)"
            />
            <path 
              id="inner-hexagon" 
              className="draw-path" 
              d="M 100 27 L 163.2 63.5 L 163.2 136.5 L 100 173 L 36.8 136.5 L 36.8 63.5 Z" 
              fill="none" 
              stroke="url(#gold-grad)" 
              stroke-width="1" 
              stroke-dasharray="4 4"
              stroke-linecap="round"
              stroke-linejoin="round"
              opacity="0.6"
            />

            {/* Circuit Core C */}
            <g id="circuit-c" filter="url(#neon-glow)">
              <path 
                id="circuit-main" 
                className="draw-path" 
                d="M 136 72 L 92 72 A 28 28 0 1 0 92 128 L 136 128" 
                fill="none" 
                stroke="url(#gold-grad)" 
                stroke-width="4.2" 
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path 
                id="branch-top" 
                className="draw-path" 
                d="M 108 72 L 108 54 L 126 54" 
                fill="none" 
                stroke="url(#gold-grad)" 
                stroke-width="1.8" 
                stroke-linecap="round" 
              />
              <path 
                id="branch-bottom" 
                className="draw-path" 
                d="M 108 128 L 108 146 L 126 146" 
                fill="none" 
                stroke="url(#gold-grad)" 
                stroke-width="1.8" 
                stroke-linecap="round" 
              />
              <path 
                id="branch-mid" 
                className="draw-path" 
                d="M 72 100 L 56 100" 
                fill="none" 
                stroke="url(#gold-grad)" 
                stroke-width="1.8" 
                stroke-linecap="round" 
              />

              <circle cx="136" cy="72" r="4" fill="#fff" stroke="#f59e0b" stroke-width="1.5" />
              <circle cx="136" cy="128" r="4" fill="#fff" stroke="#f59e0b" stroke-width="1.5" />
              <circle cx="126" cy="54" r="3" fill="#fbbf24" />
              <circle cx="126" cy="146" r="3" fill="#fbbf24" />
              <circle cx="56" cy="100" r="3" fill="#fbbf24" />
              <circle cx="100" cy="100" r="5" fill="url(#gold-grad)" className="pulse-node" />
            </g>
          </svg>
        </div>

        {/* CoE Typography (02-coe-text) */}
        <div className="title-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 40" className="w-full h-full" role="img" aria-label="Center of Excellence Title Text">
            <style>
              {`
                .text-title {
                  font-family: system-ui, -apple-system, sans-serif;
                  font-size: 21px;
                  font-weight: 700;
                  fill: #f8fafc;
                  letter-spacing: 11px;
                  text-transform: uppercase;
                  text-anchor: middle;
                }
              `}
            </style>
            <text x="250" y="26" className="text-title">CENTER OF EXCELLENCE</text>
          </svg>
        </div>

        {/* Sahyadri Subtitle Text */}
        <div className="subtitle-text">
          Sahyadri College of Engineering & Management
        </div>

        {/* Sleek Progress Ring */}
        <div className="progress-wrapper flex flex-col items-center gap-4">
          <ProgressRing progress={progress} size={64} strokeWidth={2.5} />
        </div>
      </div>
    </motion.div>
  );
};
