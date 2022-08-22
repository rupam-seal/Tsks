import React from 'react';

import { SlOptions } from 'react-icons/sl';
import { AiFillEdit } from 'react-icons/ai';

const ChildCard = ({ children }) => {
  return (
    <div className="child">
      <Content>{'Go to gym'}</Content>
      <TaskDate>{new Date().toLocaleDateString()}</TaskDate>
      <Labels />
      {children}
    </div>
  );
};

export const Content = ({ children }) => {
  return (
    <div class="content">
      <Title>{children}</Title>
      <Options />
    </div>
  );
};

export const Title = ({ children }) => {
  return <span className="title">{children}</span>;
};

export const Options = () => {
  return (
    <div class="options">
      <Icon>
        <AiFillEdit />
      </Icon>
      <Icon>
        <SlOptions />
      </Icon>
    </div>
  );
};

export const Icon = ({ children }) => {
  return <span className="icon">{children}</span>;
};

export const TaskDate = ({ children }) => {
  return <span class="date">{children}</span>;
};

export const Labels = () => {
  return (
    <div class="labels">
      <Label>Read</Label>
      <Label>Coding</Label>
      <Label>Workout</Label>
      <Label>Django</Label>
      <Label>UX</Label>
      <Label>Programming</Label>
      <Label>Gym</Label>
      <Label>Dinner</Label>
      <Label>Workout</Label>
    </div>
  );
};

export const Label = ({ children }) => {
  return <span class="label">{children}</span>;
};

export default ChildCard;
