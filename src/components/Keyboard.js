import React from 'react';

// Predefined QWERTY layout data structure
const predefinedLayouts = {
  qwerty: [
    [
      { label: 'Esc' }, { label: 'F1' }, { label: 'F2' }, { label: 'F3' }, { label: 'F4' }
    ],
    [
      { label: 'Q' }, { label: 'W' }, { label: 'E' }, { label: 'R' }, { label: 'T' }, { label: 'Y' }, { label: 'U' }, { label: 'I' }, { label: 'O' }, { label: 'P' }
    ],
    [
      { label: 'A' }, { label: 'S' }, { label: 'D' }, { label: 'F' }, { label: 'G' }, { label: 'H' }, { label: 'J' }, { label: 'K' }, { label: 'L' }, { label: 'Enter', width: 2 } // Fixed width for Enter key
    ],
    [
      { label: 'Shift', width: 2 }, { label: 'Z' }, { label: 'X' }, { label: 'C' }, { label: 'V' }, { label: 'B' }, { label: 'N' }, { label: 'M' }, { label: 'Backspace', width: 2 } // Fixed width for Backspace
    ],
    [
      { label: 'Space', width: 5 } // Fixed width for Spacebar
    ]
  ]
};

// Create the Key component
const KeyComponent = ({ label, width }) => {
  return (
    <div className="key" style={{ gridColumn: width ? `span ${width}` : 'auto' }}>
      {label}
    </div>
  );
};

// Render the QWERTY layout using the predefined data
const Keyboard = () => {
  const layout = predefinedLayouts.qwerty; // Load the predefined QWERTY layout

  return (
    <div className="keyboard-grid">
      {layout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key, keyIndex) => (
            <KeyComponent key={keyIndex} label={key.label} width={key.width} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
