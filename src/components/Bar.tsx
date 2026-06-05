// @ts-ignore
// @ts-ignore
import React from 'react';
// @ts-ignore
import '../styles/Bar.css';

interface BarProps {
  items: string[];
}

export const TopBar: React.FC<BarProps> = ({ items }) => {
  return (
    <div className="topBar">
      {items.map((item, index) => (
        <div key={index} className="barItem">
          {item}
        </div>
      ))}
    </div>
  );
};

export const BottomBar: React.FC<BarProps> = ({ items }) => {
  return (
    <div className="bottomBar">
      {items.map((item, index) => (
        <div
          key={index}
          className={`barItem ${index > 0 ? 'barItemRight' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
