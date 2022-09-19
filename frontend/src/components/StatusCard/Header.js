import React from 'react';

import { SlOptions } from 'react-icons/sl';
import { IoMdAdd } from 'react-icons/io';

const Header = ({ title, task }) => {
  const taskCount = task.length;
  return (
    <div className="header">
      <Content title={title} count={taskCount} />
      <Options />
    </div>
  );
};

export const Content = ({ title, count }) => {
  return (
    <div className="content">
      <Title>{title}</Title>
      <Count>{count}</Count>
    </div>
  );
};

export const Title = ({ children }) => {
  return <span className="title">{children}</span>;
};

export const Count = ({ children }) => {
  return <span className="count">{children}</span>;
};

export const Options = () => {
  return (
    <div className="options">
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
