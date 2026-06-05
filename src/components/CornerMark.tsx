import React from 'react';
// @ts-ignore
import '../styles/Decorative.css';
import type { CornerMarkProps } from '../types';

const CornerMark: React.FC<CornerMarkProps> = ({ position }) => {
  const getCornerClass = () => {
    const positionMap: Record<string, string> = {
      tl: 'corner cornerTl',
      tr: 'corner cornerTr',
      bl: 'corner cornerBl',
      br: 'corner cornerBr',
    };
    return positionMap[position] || 'corner';
  };

  const getVerticalClass = () => {
    const mapping: Record<string, string> = {
      tl: 'cornerTlV',
      tr: 'cornerTrV',
      bl: 'cornerBlV',
      br: 'cornerBrV',
    };
    return mapping[position] || '';
  };

  const getHorizontalClass = () => {
    const mapping: Record<string, string> = {
      tl: 'cornerTlH',
      tr: 'cornerTrH',
      bl: 'cornerBlH',
      br: 'cornerBrH',
    };
    return mapping[position] || '';
  };

  return (
    <div className={getCornerClass()}>
      <div className={`cornerInner cornerVertical ${getVerticalClass()}`} />
      <div className={`cornerInner cornerHorizontal ${getHorizontalClass()}`} />
    </div>
  );
};

export default CornerMark;
