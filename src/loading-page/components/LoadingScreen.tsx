import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import '../styles/loading.css';
import '../animations/logo-draw.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  // Timeline State Machine: Scene 1 to Scene 6
  const [scene, setScene] = useState<number>(1);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Stage timings as defined in the animation sequence specification
    const scene2Timer = setTimeout(() => setScene(2), 1500); // 1.5s
    const scene3Timer = setTimeout(() => setScene(3), 3000); // 3.0s
    const scene4Timer = setTimeout(() => setScene(4), 4000); // 4.0s
    const scene5Timer = setTimeout(() => setScene(5), 5000); // 5.0s
    const scene6Timer = setTimeout(() => {
      setScene(6);
      setIsExiting(true);
    }, 6000); // 6.0s
    
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6500); // 6.5s

    return () => {
      clearTimeout(scene2Timer);
      clearTimeout(scene3Timer);
      clearTimeout(scene4Timer);
      clearTimeout(scene5Timer);
      clearTimeout(scene6Timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="loading-viewport select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* 1. Vignette Radial Overlay Frame (07-radial-gradient) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none" className="vignette-overlay" aria-hidden="true" role="presentation">
            <defs>
              <radialGradient id="vignette" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
                <stop offset="0%" stop-color="#000000" stop-opacity="0" />
                <stop offset="60%" stop-color="#000000" stop-opacity="0.25" />
                <stop offset="85%" stop-color="#000000" stop-opacity="0.75" />
                <stop offset="100%" stop-color="#000000" stop-opacity="0.95" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" fill="url(#vignette)" />
          </svg>

          {/* 2. Tiny Floating Drifting Particles (06-particles) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%" className="particles-svg" aria-hidden="true" role="presentation">
            <g fill="#ffffff" className="particles-group">
              <circle cx="120" cy="140" r="1.1" opacity="0.25" />
              <circle cx="280" cy="75" r="1.4" opacity="0.12" />
              <circle cx="460" cy="230" r="0.8" opacity="0.35" />
              <circle cx="730" cy="115" r="1.6" opacity="0.22" />
              <circle cx="880" cy="190" r="1.0" opacity="0.30" />
              <circle cx="160" cy="460" r="1.3" opacity="0.18" />
              <circle cx="310" cy="370" r="0.9" opacity="0.28" />
              <circle cx="690" cy="490" r="1.5" opacity="0.12" />
              <circle cx="840" cy="380" r="1.0" opacity="0.40" />
              <circle cx="90" cy="730" r="1.2" opacity="0.32" />
              <circle cx="260" cy="650" r="0.9" opacity="0.22" />
              <circle cx="500" cy="770" r="1.6" opacity="0.12" />
              <circle cx="780" cy="680" r="0.8" opacity="0.38" />
              <circle cx="930" cy="740" r="1.3" opacity="0.28" />
              <circle cx="220" cy="900" r="1.0" opacity="0.18" />
              <circle cx="440" cy="870" r="1.4" opacity="0.32" />
              <circle cx="660" cy="920" r="0.8" opacity="0.38" />
              <circle cx="870" cy="850" r="1.8" opacity="0.15" />
            </g>
          </svg>

          {/* 3. Soft Center Spotlight Glow (05-background-glow) */}
          <motion.div 
            className="background-glow"
            animate={{
              scale: scene >= 5 ? 1.25 : 1.0,
            }}
            transition={{
              duration: 1.0,
              ease: 'easeInOut',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%" aria-hidden="true" role="presentation">
              <defs>
                <radialGradient id="center-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10" />
                  <stop offset="35%" stop-color="#fbbf24" stop-opacity="0.03" />
                  <stop offset="70%" stop-color="#d97706" stop-opacity="0.008" />
                  <stop offset="100%" stop-color="#000000" stop-opacity="0" />
                </radialGradient>
              </defs>
              <circle cx="300" cy="300" r="300" fill="url(#center-glow)" />
            </svg>
          </motion.div>

          {/* 4. Display Content Container */}
          <div className="cinematic-content">
            
            {/* Logo Wrapper - COE Custom Wordmark (01-coe-logo) */}
            <div className={`logo-container ${scene >= 3 ? 'logo-translated' : ''}`}>
              {scene >= 2 && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" className="coe-wordmark" role="img" aria-label="COE Custom Wordmark Logo">
                  <defs>
                    <filter id="white-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <g 
                    fill="none" 
                    stroke="#ffffff" 
                    stroke-width="3.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    filter="url(#white-glow)"
                  >
                    <path id="letter-c" className="draw-path" d="M 92 32 A 30 30 0 1 0 92 68" />
                    <path id="letter-o" className="draw-path" d="M 150 20 A 30 30 0 1 1 149.9 20 Z" />
                    <path id="letter-e-spine" className="draw-path" d="M 208 20 L 208 80" />
                    <path id="letter-e-top" className="draw-path" d="M 208 20 L 238 20" />
                    <path id="letter-e-mid" className="draw-path" d="M 208 50 L 232 50" />
                    <path id="letter-e-bot" className="draw-path" d="M 208 80 L 238 80" />
                  </g>
                </svg>
              )}
            </div>

            {/* Scene 3 Subtitle: CENTER OF EXCELLENCE (02-center-of-excellence) */}
            <div className="title-container">
              <AnimatePresence>
                {scene >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 30" className="w-full h-full" role="img" aria-label="Center of Excellence text subtitle">
                      <style>
                        {`
                          .sub-excellence {
                            font-family: system-ui, -apple-system, sans-serif;
                            font-size: 13px;
                            font-weight: 300;
                            fill: #cbd5e1;
                            letter-spacing: 14px;
                            text-transform: uppercase;
                            text-anchor: middle;
                          }
                        `}
                      </style>
                      <text x="307" y="18" className="sub-excellence">CENTER OF EXCELLENCE</text>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Scene 4: Expanding Thin Divider Line (04-divider-line) */}
            <div className="divider-container">
              <AnimatePresence>
                {scene >= 4 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full origin-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 4" className="w-full h-full" aria-hidden="true" role="presentation">
                      <line x1="0" y1="2" x2="200" y2="2" stroke="#eab308" stroke-opacity="0.45" stroke-width="1.2" stroke-linecap="round" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Scene 4 Subtitle: Sahyadri College of Engineering & Management (03-sahyadri-college) */}
            <div className="college-container">
              <AnimatePresence>
                {scene >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 60" className="w-full h-full" role="img" aria-label="Sahyadri College of Engineering and Management subtitle">
                      <style>
                        {`
                          .inst-text {
                            font-family: system-ui, -apple-system, sans-serif;
                            font-size: 11.5px;
                            font-weight: 300;
                            fill: #94a3b8;
                            letter-spacing: 4.5px;
                            text-transform: uppercase;
                            text-anchor: middle;
                          }
                        `}
                      </style>
                      <text x="252" y="24" className="inst-text">Sahyadri College of</text>
                      <text x="252" y="46" className="inst-text">Engineering &amp; Management</text>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
