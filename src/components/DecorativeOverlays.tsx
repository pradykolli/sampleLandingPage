// @ts-ignore
// @ts-ignore
import React from 'react';
import '../styles/Layout.css';

const DecorativeOverlays: React.FC = () => {
  return (
    <>
      <div className="noiseOverlay" aria-hidden="true" />
      <div className="scanLines" aria-hidden="true" />
    </>
  );
};

export default DecorativeOverlays;
