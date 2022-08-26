import React from 'react';
import ParentCard from './ParentCard';

const InProgress = () => {
  return (
    <div className="inprogress">
      <ParentCard>
        <Progress percentage={'67'} />
      </ParentCard>
    </div>
  );
};

export const Progress = ({ percentage }) => {
  return (
    <div class="progress">
      <Bar>{percentage}</Bar>
      <Percentage>{percentage}</Percentage>
    </div>
  );
};

export const Bar = ({ children }) => {
  return (
    <div class="bar">
      <div class="bar__line" style={{ width: `${children}%` }}></div>
    </div>
  );
};

export const Percentage = ({ children }) => {
  return <span className="percentage">{children}%</span>;
};

export default InProgress;
