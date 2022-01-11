import React from 'react';
import './App.css';

import { useNavigate } from 'react-router-dom';

export function App() {

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/about')}>About?</button>
    </div>
  );
}

export default App;
