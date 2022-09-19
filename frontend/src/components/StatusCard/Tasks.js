import React from 'react';
import ParentCard from './ParentCard';

import './Tasks.css';
import { FilterTask } from '../utils/Fetch';

export const Tasks = ({ status, title, task }) => {
  return (
    <div className={`${status}`}>
      <ParentCard title={title} status={`${status}`} task={task} />
    </div>
  );
};
