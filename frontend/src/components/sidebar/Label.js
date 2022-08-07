import React from 'react';
import Container from './Container';

const Label = () => {
  return (
    <Container title={'Label'}>
      <LabelList />
    </Container>
  );
};

export const LabelList = () => {
  return (
    <div>
      <LableItem>Read</LableItem>
      <LableItem>Coding</LableItem>
      <LableItem>Workout</LableItem>
      <LableItem>Django</LableItem>
      <LableItem>UX</LableItem>
      <LableItem>Programming</LableItem>
      <LableItem>Gym</LableItem>
      <LableItem>Dinner</LableItem>
      <LableItem>Workout</LableItem>
    </div>
  );
};

export const LableItem = ({ children }) => {
  const colors = ['#ff0077', '#c300ff', '#009dff', '#09ff00', '#ff8000'];
  const random = Math.floor(Math.random() * colors.length);

  return (
    <div
      style={{ backgroundColor: colors[random] + 26, color: colors[random] }}
      className="label"
    >
      {children}
    </div>
  );
};

export default Label;
