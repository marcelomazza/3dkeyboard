import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import Keyboard3D from './components/Keyboard3D';
import './global.css';

const initialLayout = [
  // First row
  { id: 'Q', x: 0, y: 0, color: '#4CAF50', label: 'Q' },
  { id: 'W', x: 1, y: 0, color: '#4CAF50', label: 'W' },
  { id: 'E', x: 2, y: 0, color: '#4CAF50', label: 'E' },
  { id: 'R', x: 3, y: 0, color: '#4CAF50', label: 'R' },
  { id: 'T', x: 4, y: 0, color: '#4CAF50', label: 'T' },
  { id: 'Y', x: 5, y: 0, color: '#4CAF50', label: 'Y' },
  { id: 'U', x: 6, y: 0, color: '#4CAF50', label: 'U' },
  { id: 'I', x: 7, y: 0, color: '#4CAF50', label: 'I' },
  { id: 'O', x: 8, y: 0, color: '#4CAF50', label: 'O' },
  { id: 'P', x: 9, y: 0, color: '#4CAF50', label: 'P' },
  // Second row
  { id: 'A', x: 0.5, y: 1, color: '#2196F3', label: 'A' },
  { id: 'S', x: 1.5, y: 1, color: '#2196F3', label: 'S' },
  { id: 'D', x: 2.5, y: 1, color: '#2196F3', label: 'D' },
  { id: 'F', x: 3.5, y: 1, color: '#2196F3', label: 'F' },
  { id: 'G', x: 4.5, y: 1, color: '#2196F3', label: 'G' },
  { id: 'H', x: 5.5, y: 1, color: '#2196F3', label: 'H' },
  { id: 'J', x: 6.5, y: 1, color: '#2196F3', label: 'J' },
  { id: 'K', x: 7.5, y: 1, color: '#2196F3', label: 'K' },
  { id: 'L', x: 8.5, y: 1, color: '#2196F3', label: 'L' },
  // Third row
  { id: 'Z', x: 1, y: 2, color: '#FFC107', label: 'Z' },
  { id: 'X', x: 2, y: 2, color: '#FFC107', label: 'X' },
  { id: 'C', x: 3, y: 2, color: '#FFC107', label: 'C' },
  { id: 'V', x: 4, y: 2, color: '#FFC107', label: 'V' },
  { id: 'B', x: 5, y: 2, color: '#FFC107', label: 'B' },
  { id: 'N', x: 6, y: 2, color: '#FFC107', label: 'N' },
  { id: 'M', x: 7, y: 2, color: '#FFC107', label: 'M' },
];

const App = () => {
  const [layout, setLayout] = useState(initialLayout);
  const [selectedKey, setSelectedKey] = useState(null);

  const handleKeySelect = (keyId) => {
    setSelectedKey(layout.find(key => key.id === keyId));
  };

  const handleKeyUpdate = (updatedKey) => {
    setLayout(layout.map(key => key.id === updatedKey.id ? updatedKey : key));
    setSelectedKey(null);
  };

  return (
    <div className="app">
      <h1>3D Keyboard Layout Editor</h1>
      <div className="editor-container">
        <div className="keyboard-2d">
          <Keyboard
            layout={layout}
            onKeySelect={handleKeySelect}
          />
        </div>
        <div className="keyboard-3d">
          <Keyboard3D layout={layout} />
        </div>
      </div>
      {selectedKey && (
        <div className="key-editor">
          <h2>Edit Key: {selectedKey.label}</h2>
          <input
            type="text"
            value={selectedKey.label}
            onChange={(e) => handleKeyUpdate({...selectedKey, label: e.target.value})}
          />
          <input
            type="color"
            value={selectedKey.color}
            onChange={(e) => handleKeyUpdate({...selectedKey, color: e.target.value})}
          />
          <button onClick={() => setSelectedKey(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
