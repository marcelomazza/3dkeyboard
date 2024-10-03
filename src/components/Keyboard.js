import React from 'react';

// Create a simple Key component for now
const KeyComponent = ({ label }) => {
  return (
    <div className="key">
      {label}
    </div>
  );
};

const Keyboard = () => {
  const keys = [
    ['Esc', 'F1', 'F2', 'F3', 'F4'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['Space']
  ];

  return (
    <div className="keyboard-grid">
      {keys.flat().map((keyLabel, index) => (
        <KeyComponent key={index} label={keyLabel} />
      ))}
    </div>
  );
};

export default Keyboard;
