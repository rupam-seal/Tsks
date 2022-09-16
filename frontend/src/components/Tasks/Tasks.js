import React from 'react';
import ParentCard from './ParentCard';

import './Tasks.css';
import { FilterTask } from '../utils/Fetch';

export const Tasks = () => {
  const notstarted = FilterTask('notstarted');
  const inprogress = FilterTask('inprogress');
  const complete = FilterTask('complete');

  return (
    <div className="overview">
      <div className="notstarted">
        <ParentCard
          title={'Not Started'}
          status="notstarted"
          task={notstarted}
        />
      </div>
      <div className="inprogress">
        <ParentCard title={'Complete'} status="complete" task={inprogress} />
      </div>
      <div className="complete">
        <ParentCard title="In Progress" status="inprogress" task={complete} />
      </div>
    </div>
  );
};
