import './App.css';

import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Grid } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

import { Home } from './pages/Home';
import { Projects } from './pages/Projects/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export enum Pages {
  Home = 'Home',
  Projects = 'Projects'
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
