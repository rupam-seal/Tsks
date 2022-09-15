import React from 'react';
import { IoLogoIonic } from 'react-icons/io';

const Top = () => {
  return (
    <div className="top">
      <Navigation />
      <Logo />
    </div>
  );
};

// logo text
const Logo = () => {
  return (
    <div className="logo">
      <IoLogoIonic />
      <span>
        Ts<span>ks.</span>
      </span>
    </div>
  );
};

// navigation dot
export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
    </div>
  );
};

export default Top;
