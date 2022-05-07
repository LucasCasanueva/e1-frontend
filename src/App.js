import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routez from './Routes';

function App() {
  return (
    <Router>
      <Routez />
    </Router>
  );
}

export default App;
