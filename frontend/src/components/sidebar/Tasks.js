import React from 'react';
import Container from './Container';

const Tasks = () => {
  return (
    <Container title={'Tasks'}>
      <TasksList />
    </Container>
  );
};

export const TasksList = () => {
  return (
    <>
      <Task>Go, to gym</Task>
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
