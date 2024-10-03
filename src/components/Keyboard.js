import React, { useState } from 'react';
import layoutModel from '../models/layoutModel'; 
import KeyComponent from './KeyComponent'; // Correct KeyComponent usage
import KeyAdditionPanel from './KeyAdditionPanel'; // New Key Addition Panel component

const Keyboard = ({ layoutType = 'qwerty' }) => {
  const [isEditMode, setIsEditMode] = useState(false); 
  const layout = layoutModel.getLayout(layoutType);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleAddKey = (newKey) => {
    layoutModel.addKey(newKey.label, newKey.width, newKey.row);
  };

  const rows = [1, 2, 3, 4, 5, 6]; // Grouping keys into rows
  return (
    <div className="keyboard-container">
      <button onClick={toggleEditMode}>
        {isEditMode ? 'Switch to View Mode' : 'Switch to Edit Mode'}
      </button>

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
  );
};

export default Keyboard;
