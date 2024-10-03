import React from 'react';
import layoutModel from '../models/layoutModel'; // Import the centralized layout model

const KeyComponent = ({ label, width }) => {
  return (
    <div 
      className="key" 
      style={{ flex: `0 0 ${width * 60}px` }} // Adjust width dynamically based on key size
    >
      {label}
    </div>
  );
};

const Keyboard = ({ layoutType = 'qwerty' }) => {
  const layout = layoutModel.getLayout(layoutType); // Get the layout (predefined or custom)

  const rows = [1, 2, 3, 4, 5, 6]; // Total number of rows in the layout
  return (
    <>
      {rows.map(row => (
        <div className="keyboard-row" key={row}>
          {layout.filter(key => key.row === row).map((key, index) => (
            <KeyComponent key={index} label={key.label} width={key.width} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Keyboard;
