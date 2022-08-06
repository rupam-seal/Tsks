import React from 'react';
import Bottom from './Bottom';
import Label from './Label';
import Menu from './Menu';

import './Sidebar.css';
import Tasks from './Tasks';

import Top from './Top';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Top />
        <Menu />
        <Tasks />
        <Label />
      </div>
      <div className="sidebar__bottom">
        <Bottom />
      </div>
    </div>
  );
};
