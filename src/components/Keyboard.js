import React, { useState } from 'react';
import layoutModel from '../models/layoutModel'; 
import KeyComponent from './KeyComponent'; 
import KeyAdditionPanel from './KeyAdditionPanel'; 
import Keyboard3D from './Keyboard3D'; // Import the 3D keyboard component

const Keyboard = () => {
  const [isEditMode, setIsEditMode] = useState(false); 
  const [layoutType, setLayoutType] = useState('qwerty'); // Track the selected layout
  const [layout, setLayout] = useState(layoutModel.getLayout(layoutType)); // Track current layout

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleAddKey = (newKey) => {
    layoutModel.addKey(newKey.label, newKey.width, newKey.row);
    setLayout([...layoutModel.getLayout('custom')]); // Update the layout state after adding a key
  };

  const handleLayoutChange = (e) => {
    const selectedLayout = e.target.value;
    setLayoutType(selectedLayout); // Update the selected layout
    setLayout(layoutModel.getLayout(selectedLayout)); // Load the selected layout
  };

  const rows = [1, 2, 3, 4, 5, 6]; 

  return (
    <div className="keyboard-container">
      <button onClick={toggleEditMode}>
        {isEditMode ? 'Switch to View Mode' : 'Switch to Edit Mode'}
      </button>

      <div>
        <label>Choose Layout: </label>
        <select onChange={handleLayoutChange} value={layoutType}>
          <option value="qwerty">QWERTY</option>
          <option value="dvorak">Dvorak</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      <div className="layout-view">
        {/* 2D View */}
        <div className="keyboard-2d-view">
          {isEditMode && <KeyAdditionPanel onAddKey={handleAddKey} />}
          <div className="keyboard">
            {rows.map(rowNumber => (
              <div className="keyboard-row" key={rowNumber}>
                {layout.filter(key => key.row === rowNumber).map((key, index) => (
                  <KeyComponent 
                    key={index} 
                    label={key.label} 
                    width={key.width} 
                    isEditMode={isEditMode} 
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 3D View */}
        <div className="keyboard-3d-view">
          <Keyboard3D layoutType={layoutType} />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
