import React from 'react';
import { IoLogoIonic } from 'react-icons/io';

const Top = () => {
  return (
    <div class="top">
      <Navigation />
      <Logo />
    </div>
  );
};

// logo text
const Logo = () => {
  return (
    <div class="logo">
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
    <div class="navigation">
      <div class="dot dot1"></div>
      <div class="dot dot2"></div>
      <div class="dot dot3"></div>
    </div>
  );
};

export default Top;
