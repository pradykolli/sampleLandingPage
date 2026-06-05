// @ts-ignore
// @ts-ignore
import React from 'react';
// @ts-ignore
import '../styles/Tagline.css';

interface TaglineProps {
  text?: string;
  accentText?: string;
  suffix?: string;
}

const Tagline: React.FC<TaglineProps> = ({
  text = 'The Future Starts Here ',
  accentText = 'Toronto',
  suffix = ' Limited Drops',
}) => {
  return (
    <div className="tagline">
      {text}
      &nbsp;·&nbsp;
      <span className="taglineAccent">{accentText}</span>
      &nbsp;·&nbsp;
      {suffix}
    </div>
  );
};

export default Tagline;
