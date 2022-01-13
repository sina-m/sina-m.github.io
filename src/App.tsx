import React from 'react';
import { Pivot, PivotItem } from '@fluentui/react/lib/Pivot';

import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { NavBar } from './components/NavBar';

import './App.css';
import { Stack } from '@fluentui/react/lib/Stack';
import { ResizeGroup } from '@fluentui/react/lib/ResizeGroup';

export function App() {

  return (
  //   <BrowserRouter>
  //   <Routes>
  //     {/* <Route path='\' element={<Home />} /> */}
  //     <Route index element={<App />} />
  //     {/* <Route path='\' element={<App />} /> */}
  //     <Route path="projects" element={<Projects />} />
  //   </Routes>
  // </BrowserRouter>

  // Single stack around the pivot to handle resizing
    <NavBar />
  // <Stack>
  //   <Pivot aria-label='Basic Pivot Example' linkSize='large'>
  //     <PivotItem headerText='About Me'>
  //       <Home />
  //     </PivotItem>
  //     <PivotItem headerText='Projects'>
  //       <Projects />
  //     </PivotItem>
  //   </Pivot>
  // </Stack>
  );
}

export default App;
