import React, { useEffect } from 'react';

interface CursorTrailProps {
  isEnabled?: boolean;
}

const CursorTrail: React.FC<CursorTrailProps> = ({ isEnabled = true }) => {
  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dot = document.createElement('div');
      dot.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 3px;
        height: 3px;
        background: #C8FF00;
        pointer-events: none;
        z-index: 999;
        opacity: 0.4;
        border-radius: 50%;
        transition: opacity 0.6s;
      `;
      document.body.appendChild(dot);

      setTimeout(() => {
        dot.style.opacity = '0';
      }, 100);

      setTimeout(() => {
        dot.remove();
      }, 700);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isEnabled]);

  return null;
};

export default CursorTrail;
