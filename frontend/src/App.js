import React from 'react';
import { Sidebar } from './components/sidebar';
import { Tasks } from './components/Tasks';
import { Topbar } from './components/topbar';

const App = () => {
  return (
    <>
      <Sidebar />
      <Topbar />
      <Tasks />
    </>
  );
};

export default App;
