import React from 'react';

const Overview = () => {
  return (
    <div class="nav-container">
      <div class="nav__title">Overview</div>
      <div class="nav__list">
        <OverviewItem image={''} title={'Overview'} />
      </div>
    </div>
  );
};

export default Overview;

export const OverviewItem = ({ image, title }) => {
  return (
    <div class="nav nav--active">
      <img src={image} alt="" class="nav__img"></img>
      <h5 class="nav__txt">{title}</h5>
    </div>
  );
};
