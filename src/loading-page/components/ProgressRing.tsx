import React from 'react';

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 72,
  strokeWidth = 3,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* SVG Circle Loader */}
      <svg width={size} height={size} className="transform -rotate-90" aria-hidden="true">
        {/* Track circle (Static thin border) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle (Glowing Gold) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#eab308" /* Gold color */
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-150 ease-out"
          style={{
            filter: 'drop-shadow(0 0 4px rgba(234, 179, 8, 0.5))',
          }}
        />
      </svg>
      
      {/* Centered Percentage Indicator */}
      <span className="absolute font-mono text-xs font-semibold text-yellow-500 tracking-wider">
        {Math.round(progress)}%
      </span>
    </div>
  );
};
