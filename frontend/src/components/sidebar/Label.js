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
      <LableItem>Read</LableItem>
      <LableItem>Read</LableItem>
      <LableItem>Read</LableItem>
      <LableItem>Read</LableItem>
      <LableItem>Read</LableItem>
      <LableItem>Read</LableItem>
      <LableItem>Read</LableItem>
      <LableItem>Read</LableItem>
    </div>
  );
};

export const LableItem = ({ children }) => {
  return <div className="label">{children}</div>;
};

export default Label;
