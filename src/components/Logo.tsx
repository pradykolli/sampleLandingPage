// @ts-ignore
// @ts-ignore
import React from 'react';
// @ts-ignore
import '../styles/Logo.css';

interface LogoProps {
  ariaLabel?: string;
}

const Logo: React.FC<LogoProps> = ({ ariaLabel = 'FUC#A Logo' }) => {
  return (
    <div className="logoWrap">
      <svg
        className="logoSvg"
        viewBox="0 0 450 160"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <filter id="acidGlow" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* F */}
        <rect x="0" y="10" width="14" height="140" fill="#f0ede8" />
        <rect x="0" y="10" width="72" height="14" fill="#f0ede8" />
        <rect x="0" y="75" width="58" height="12" fill="#f0ede8" />

        {/* U */}
        <rect x="98" y="10" width="14" height="126" fill="#f0ede8" />
        <rect x="98" y="136" width="68" height="14" fill="#f0ede8" />
        <rect x="152" y="10" width="14" height="126" fill="#f0ede8" />

        {/* C */}
        <rect x="188" y="10" width="68" height="14" fill="#f0ede8" />
        <rect x="188" y="10" width="14" height="140" fill="#f0ede8" />
        <rect x="188" y="136" width="68" height="14" fill="#f0ede8" />

        {/* # (HASH) — THE HERO CHARACTER in acid green */}
        {/* Vertical bars */}
        <rect x="285" y="20" width="10" height="120" fill="#C8FF00" />
        <rect x="313" y="20" width="10" height="120" fill="#C8FF00" />
        {/* Horizontal bars */}
        <rect x="272" y="62" width="50" height="10" fill="#C8FF00" />
        <rect x="272" y="90" width="50" height="10" fill="#C8FF00" />

        {/* A */}
        {/* Left diagonal */}
        <polygon
          points="368,150 390,10 396,10 404,10 410,10 432,150 418,150 400,46 382,150"
          fill="#f0ede8"
        />
        {/* Crossbar */}
        <rect x="376" y="92" width="48" height="12" fill="#f0ede8" />

        {/* Subtle acid underline accent */}
        <rect x="0" y="158" width="450" height="2" fill="#C8FF00" opacity="0.15" />
      </svg>

      {/* Glitch layers */}
      <svg
        className="logoSvg glitchLayer"
        viewBox="0 0 450 160"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <rect x="0" y="10" width="14" height="140" fill="#C8FF00" />
        <rect x="0" y="10" width="72" height="14" fill="#C8FF00" />
        <rect x="0" y="75" width="58" height="12" fill="#C8FF00" />
        <rect x="98" y="10" width="14" height="126" fill="#C8FF00" />
        <rect x="98" y="136" width="68" height="14" fill="#C8FF00" />
        <rect x="152" y="10" width="14" height="126" fill="#C8FF00" />
        <rect x="188" y="10" width="68" height="14" fill="#C8FF00" />
        <rect x="188" y="10" width="14" height="140" fill="#C8FF00" />
        <rect x="188" y="136" width="68" height="14" fill="#C8FF00" />
        <rect x="285" y="20" width="10" height="120" fill="#f0ede8" />
        <rect x="313" y="20" width="10" height="120" fill="#f0ede8" />
        <rect x="272" y="62" width="50" height="10" fill="#f0ede8" />
        <rect x="272" y="90" width="50" height="10" fill="#f0ede8" />
        <polygon
          points="368,150 390,10 396,10 404,10 410,10 432,150 418,150 400,46 382,150"
          fill="#C8FF00"
        />
        <rect x="376" y="92" width="48" height="12" fill="#C8FF00" />
      </svg>

      <svg
        className="logoSvg glitchLayer glitchLayer2"
        viewBox="0 0 450 160"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <rect x="285" y="20" width="10" height="120" fill="#ff2200" opacity="0.8" />
        <rect x="313" y="20" width="10" height="120" fill="#ff2200" opacity="0.8" />
        <rect x="272" y="62" width="50" height="10" fill="#ff2200" opacity="0.8" />
        <rect x="272" y="90" width="50" height="10" fill="#ff2200" opacity="0.8" />
      </svg>
    </div>
  );
};

export default Logo;
