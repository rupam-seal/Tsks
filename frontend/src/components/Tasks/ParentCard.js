import React from 'react';

import Header from './Header';
import ChildCard from './ChildCard';
import { New } from './New';

const ParentCard = ({ title, status, task, children }) => {
  // mapping through each status
  const childCard = task.map((child) => {
    return (
      <ChildCard key={child._id} task={child}>
        {children}
      </ChildCard>
    );
  });

  return (
    <div className="parent">
      <Header title={title} task={task} />
      {childCard}
      <New />
    </div>
  );
};

export default ParentCard;
