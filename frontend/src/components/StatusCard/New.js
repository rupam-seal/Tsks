import React from 'react';

import { MdAdd } from 'react-icons/md';

export const New = () => {
  return (
    <div className="new">
      <MdAdd />
      <Text>New</Text>
    </div>
  );
};

export const Text = ({ children }) => {
  return <span>{children}</span>;
};
