// @ts-ignore
// @ts-ignore
import React from 'react';
// @ts-ignore
import '../styles/DownloadButton.css';
import type { DownloadButtonProps } from '../types';

const DownloadButton: React.FC<DownloadButtonProps> = ({
  label,
  onClick,
  isPrimary = false,
  ariaLabel,
}) => {
  return (
    <button
      className={`dlBtn ${isPrimary ? 'dlBtnPrimary' : ''}`}
      onClick={onClick}
      aria-label={ariaLabel || label}
      title={label}
    >
      {label}
    </button>
  );
};

export default DownloadButton;
