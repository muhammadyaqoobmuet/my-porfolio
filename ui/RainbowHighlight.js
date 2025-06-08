import React from "react";

export const RainbowHighlight = ({ color, children }) => {
  // Calculate animation duration based on text length
  const animationDuration = Math.floor(30 * children.length);

  return (
    <span
      className="relative inline-block"
      style={{
        '--highlight-color': color || '#ffeb3b',
        '--animation-duration': `${animationDuration}ms`
      }}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 -z-10 animate-highlight"
        style={{
          background: `var(--highlight-color)`,
          animation: `highlight var(--animation-duration) ease-out forwards`,
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
          opacity: 0.3
        }}
      />
      <style jsx>{`
        @keyframes highlight {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        .animate-highlight {
          animation: highlight var(--animation-duration) ease-out forwards;
        }
      `}</style>
    </span>
  );
};