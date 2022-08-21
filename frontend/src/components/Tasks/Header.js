import React from 'react';

import { SlOptions } from 'react-icons/sl';
import { IoMdAdd } from 'react-icons/io';

const Header = () => {
  return (
    <div className="header">
      <Content title={'Not Started'} count={'5'} />
      <Options />
    </div>
  );
};

export const Content = ({ title, count }) => {
  return (
    <div class="content">
      <Title>{title}</Title>
      <Count>{count}</Count>
    </div>
  );
};

export const Title = ({ children }) => {
  return <span className="title">{children}</span>;
};

export const Count = ({ children }) => {
  return <span class="count">{children}</span>;
};

export const Options = () => {
  return (
    <div class="options">
      <Icon>
        <SlOptions />
      </Icon>
      <Icon>
        <IoMdAdd />
      </Icon>
    </div>
  );
};

export const Icon = ({ children }) => {
  return <span className="icon">{children}</span>;
};

export default Header;
