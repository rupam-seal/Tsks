import React from 'react';
import Container from './Container';

import { Labels } from '../utils/Fetch';

const Label = () => {
  const labels = Labels();

  return (
    <Container title={'Label'}>
      <LabelList>{labels}</LabelList>
    </Container>
  );
};

export const LabelList = ({ children }) => {
  return (
    <div>
      {children.map((label, id) => {
        return <LableItem key={id}>{label}</LableItem>;
      })}
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
