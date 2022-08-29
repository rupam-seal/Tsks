import React from 'react';
import Complete from './Complete';
import InComplete from './InComplete';
import InProgress from './InProgress';
import ParentCard from './ParentCard';

import './Tasks.css';

const Tasks = () => {
  return (
    <div className="overview">
      <InComplete />
      <InProgress />
      <Complete />
    </div>
  );
};

export default Tasks;
