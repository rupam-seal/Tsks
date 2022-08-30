import React from 'react';
import { Sidebar } from './components/sidebar';
import Tasks from './components/Tasks/Tasks';
import Topbar from './components/topbar/Topbar';

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
