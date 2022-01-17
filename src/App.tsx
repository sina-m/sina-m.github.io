import './App.css';

import React from 'react';

import { Home } from './pages/Home';
import { Projects } from './pages/projects/Projects';
import { HashRouter, Route, Routes } from 'react-router-dom';

export enum Pages {
  Home = 'Home',
  Projects = 'Projects'
}

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
