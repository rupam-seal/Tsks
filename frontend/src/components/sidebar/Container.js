import React from 'react';

const Container = ({ title, children }) => {
  return (
    <div class="container">
      <div class="container__title">{title}</div>
      <div class="container__list">{children}</div>
    </div>
  );
};

export default Container;
