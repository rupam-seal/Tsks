import React from 'react';
import ParentCard from './ParentCard';
import { AiTwotoneHeart } from 'react-icons/ai';

const Complete = () => {
  return (
    <div className="complete">
      <ParentCard>
        <Completed />
      </ParentCard>
    </div>
  );
};

export const Completed = () => {
  return (
    <div class="completed">
      <div class="completed__left">
        <Text>Complete</Text>
        <CompleteDate>20Sep 2022</CompleteDate>
      </div>
      <div className="completed__like">
        <AiTwotoneHeart />
      </div>
    </div>
  );
};

export const Text = ({ children }) => {
  return <div class="completed__text">{children}</div>;
};

export const CompleteDate = ({ children }) => {
  return <div class="completed__date">{children}</div>;
};

export default Complete;
