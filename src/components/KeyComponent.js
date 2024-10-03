import React from 'react';

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

export default KeyComponent;
