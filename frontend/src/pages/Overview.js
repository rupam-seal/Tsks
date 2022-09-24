import React from 'react';
import { Tasks } from '../components/StatusCard';

import { FilterTask } from '../components/utils/Fetch';

const Overview = () => {
  const notstarted = FilterTask('notstarted');
  const inprogress = FilterTask('inprogress');
  const complete = FilterTask('complete');
  return (
    <div className="overview">
      <Tasks status={'notstarted'} title={'Not Started'} task={notstarted} />
      <Tasks status={'inprogress'} title={'In Progress'} task={inprogress} />
      <Tasks status={'complete'} title={'Complete'} task={complete} />
    </div>
  );
};

export default Overview;
