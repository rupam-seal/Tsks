import React, { createContext, useContext } from 'react';

import { SlOptions } from 'react-icons/sl';
import { AiFillEdit } from 'react-icons/ai';
import Progress from './Progress';
import Completed from './Completed';

const ChildCardContext = createContext();
const { Provider } = ChildCardContext;

// children: parent card name
// task: each task on each status
const ChildCard = ({ task }) => {
  const value = {
    task,
  };

  return (
    <Provider value={value}>
      <div className="child">
        <Content />
        <TaskDate>{task.start_date}</TaskDate>
        <Labels />
        {task.status == 'inprogress' ? (
          <Progress task={task} />
        ) : task.status == 'complete' ? (
          <Completed task={task} />
        ) : (
          ''
        )}
      </div>
    </Provider>
  );
};

export const Content = () => {
  return (
    <div className="content">
      <Title />
      <Options />
    </div>
  );
};

export const Title = () => {
  const { task } = useContext(ChildCardContext);

  const sliceStr = (str) => {
    return str.split('', 23).join('');
  };

  return (
    <span className="title">
      {sliceStr(task.name)}
      {task.name.length > 23 ? '...' : ''}
    </span>
  );
};

export const Options = () => {
  return (
    <div className="options">
      <Icon>
        <AiFillEdit />
      </Icon>
      <Icon>
        <SlOptions />
      </Icon>
    </div>
  );
};

export const Icon = ({ children }) => {
  return <span className="icon">{children}</span>;
};

export const TaskDate = ({ children }) => {
  return <span className="date">{children}</span>;
};

export const Labels = () => {
  const { task } = useContext(ChildCardContext);

  const labels = task.labels.map((label, id) => {
    return <Label key={id}>{label}</Label>;
  });

  return <div className="labels">{labels}</div>;
};

export const Label = ({ children }) => {
  return <span className="label">{children}</span>;
};

export default ChildCard;
