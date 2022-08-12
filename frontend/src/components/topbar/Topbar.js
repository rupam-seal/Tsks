import React from 'react';

import './Topbar.css';

import Profile from './Profile';
import Search from './Search';
import Welcome from './Welcome';
import HiddenItem from './HiddenItem';

const Topbar = () => {
  return (
    <div className="topbar">
      <Welcome />
      <Search />
      <Profile />
      <HiddenItem />
    </div>
  );
};

export default Topbar;
