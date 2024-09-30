import React from 'react';
import Keyboard from './components/Keyboard';
import Keyboard3D from './components/Keyboard3D';
import './global.css';

function App() {
  return (
    <div className="container">
      <h1>3D Keyboard Layout Editor</h1>
      <Keyboard />
      <Keyboard3D />
    </div>
  );
}

export default App;
