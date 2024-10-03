import React, { useState } from 'react';
import layoutModel from '../models/layoutModel'; // Import the centralized layout model

const KeyComponent = ({ label, width, isEditMode }) => {
  return (
    <div
      className={`key ${isEditMode ? 'editable' : ''}`}
      style={{ flex: `0 0 ${width * 60}px` }} // Adjust width dynamically based on key size
    >
      {label}
    </div>
  );
};

const Keyboard = ({ layoutType = 'qwerty' }) => {
  const [isEditMode, setIsEditMode] = useState(false); // Track whether we are in edit mode
  const layout = layoutModel.getLayout(layoutType); // Get the layout (predefined or custom)

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode); // Toggle between View and Edit modes
  };

  // Group keys by row
  const rows = [1, 2, 3, 4, 5, 6];
  return (
    <div className="keyboard-container">
      <button onClick={toggleEditMode}>
        {isEditMode ? 'Switch to View Mode' : 'Switch to Edit Mode'}
      </button>

      <div className="keyboard">
        {rows.map((rowNumber) => (
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
