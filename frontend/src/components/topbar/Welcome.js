import React from 'react';

const Welcome = () => {
  return (
    <div className="Welcome">
      <WelcomeTitle>Agnuss</WelcomeTitle>
      <WelcomeMessage>5</WelcomeMessage>
    </div>
  );
};

export const WelcomeTitle = ({ children }) => {
  return <div className="welcome__title">Welcome, {children}</div>;
};

export const WelcomeMessage = ({ children }) => {
  return (
    <div className="welcome__message">
      You have <span className="welcome__highlight">{children}</span> tasks to
      complete
    </div>
  );
};

export default Welcome;
