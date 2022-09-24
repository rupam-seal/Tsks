import React from 'react';
import ReactDOM from 'react-dom/client';
import './color.css';
import './main.css';
import { Sidebar } from './components/sidebar';
import { Tasks } from './components/StatusCard';
import { Topbar } from './components/topbar';
import Overview from './pages/Overview';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit';
import Search from './pages/Search';
import Create from './pages/Create';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Sidebar />
      <Topbar />
      <Routes>
        <Route path="/" element={<Overview />} exact />
        <Route path="/edit/" element={<Edit />} exact />
        <Route path="/search/" element={<Search />} exact />
        <Route path="/create" element={<Create />} exact />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
