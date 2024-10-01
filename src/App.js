import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import Keyboard3D from './components/Keyboard3D';
import './global.css';

const initialLayout = [
  // First row
  { id: 'Q', x: 0, y: 0, color: '#4CAF50', label: 'Q', width: 1 },
  { id: 'W', x: 1, y: 0, color: '#4CAF50', label: 'W', width: 1 },
  { id: 'E', x: 2, y: 0, color: '#4CAF50', label: 'E', width: 1 },
  { id: 'R', x: 3, y: 0, color: '#4CAF50', label: 'R', width: 1 },
  { id: 'T', x: 4, y: 0, color: '#4CAF50', label: 'T', width: 1 },
  { id: 'Y', x: 5, y: 0, color: '#4CAF50', label: 'Y', width: 1 },
  { id: 'U', x: 6, y: 0, color: '#4CAF50', label: 'U', width: 1 },
  { id: 'I', x: 7, y: 0, color: '#4CAF50', label: 'I', width: 1 },
  { id: 'O', x: 8, y: 0, color: '#4CAF50', label: 'O', width: 1 },
  { id: 'P', x: 9, y: 0, color: '#4CAF50', label: 'P', width: 1 },
  // Second row
  { id: 'A', x: 0.5, y: 1, color: '#2196F3', label: 'A', width: 1 },
  { id: 'S', x: 1.5, y: 1, color: '#2196F3', label: 'S', width: 1 },
  { id: 'D', x: 2.5, y: 1, color: '#2196F3', label: 'D', width: 1 },
  { id: 'F', x: 3.5, y: 1, color: '#2196F3', label: 'F', width: 1 },
  { id: 'G', x: 4.5, y: 1, color: '#2196F3', label: 'G', width: 1 },
  { id: 'H', x: 5.5, y: 1, color: '#2196F3', label: 'H', width: 1 },
  { id: 'J', x: 6.5, y: 1, color: '#2196F3', label: 'J', width: 1 },
  { id: 'K', x: 7.5, y: 1, color: '#2196F3', label: 'K', width: 1 },
  { id: 'L', x: 8.5, y: 1, color: '#2196F3', label: 'L', width: 1 },
  // Third row
  { id: 'Z', x: 1, y: 2, color: '#FFC107', label: 'Z', width: 1 },
  { id: 'X', x: 2, y: 2, color: '#FFC107', label: 'X', width: 1 },
  { id: 'C', x: 3, y: 2, color: '#FFC107', label: 'C', width: 1 },
  { id: 'V', x: 4, y: 2, color: '#FFC107', label: 'V', width: 1 },
  { id: 'B', x: 5, y: 2, color: '#FFC107', label: 'B', width: 1 },
  { id: 'N', x: 6, y: 2, color: '#FFC107', label: 'N', width: 1 },
  { id: 'M', x: 7, y: 2, color: '#FFC107', label: 'M', width: 1 },
];

const App = () => {
  const [layout, setLayout] = useState(initialLayout);
  const [selectedKey, setSelectedKey] = useState(null);

  const handleKeySelect = (keyId) => {
    setSelectedKey(layout.find(key => key.id === keyId));
  };

  const handleKeyUpdate = (updatedKey) => {
    setLayout(layout.map(key => key.id === updatedKey.id ? updatedKey : key));
  };

  return (
    <div className="app">
      <h1>3D Keyboard Layout Editor</h1>
      <div className="editor-container">
        <div className="keyboard-views">
          <div className="keyboard-2d">
            <h2>2D View</h2>
            <Keyboard
              layout={layout}
              onKeySelect={handleKeySelect}
              selectedKey={selectedKey}
            />
          </div>
          <div className="keyboard-3d">
            <h2>3D View</h2>
            <Keyboard3D layout={layout} />
          </div>
        </div>
        <div className="key-editor">
          <h2>Key Editor</h2>
          {selectedKey ? (
            <>
              <div className="editor-field">
                <label>Label:</label>
                <input
                  type="text"
                  value={selectedKey.label}
                  onChange={(e) => handleKeyUpdate({...selectedKey, label: e.target.value})}
                />
              </div>
              <div className="editor-field">
                <label>Color:</label>
                <input
                  type="color"
                  value={selectedKey.color}
                  onChange={(e) => handleKeyUpdate({...selectedKey, color: e.target.value})}
                />
              </div>
              <div className="editor-field">
                <label>Width:</label>
                <input
                  type="number"
                  value={selectedKey.width || 1}
                  onChange={(e) => handleKeyUpdate({...selectedKey, width: parseFloat(e.target.value)})}
                  step="0.5"
                  min="0.5"
                  max="5"
                />
              </div>
              <button onClick={() => setSelectedKey(null)}>Close</button>
            </>
          ) : (
            <p>Select a key to edit</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
