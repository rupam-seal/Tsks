import React from 'react';

import Header from './Header';
import ChildCard from './ChildCard';
import { New } from './New';

const ParentCard = ({ children }) => {
  return (
    <div className="parent">
      <Header />
      <ChildCard children={children} />
      <New />
    </div>
  );
};

export default ParentCard;
