import './App.css';

import { useNavigate } from 'react-router-dom';

export function App() {

  let navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/about')}>About?</button>
    </div>
  );
}

export default App;
