import React from 'react';
import Container from './Container';

import { FilterTask } from '../utils/Fetch';

const Tasks = () => {
  const notstartedTask = FilterTask('notstarted');
  return (
    <Container title={'Tasks'}>
      <TasksList tasks={notstartedTask} />
    </Container>
  );
};

export const TasksList = ({ tasks }) => {
  const sliceStr = (str) => {
    return str.split('', 27).join('');
  };
  return (
    <>
      {tasks.slice(0, 3).map((task) => {
        return (
          <Task key={task._id}>
            {sliceStr(task.name)}
            {task.name.length > 27 ? '...' : ''}
          </Task>
        );
      })}
    </>
  );
};

export const Task = ({ children }) => {
  return (
    <div className="task">
      <div className="task__dot"></div>
      <h5 className="task__txt">{children}</h5>
    </div>
  );
};

export default Tasks;
