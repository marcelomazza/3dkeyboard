import React, { useState } from 'react';

const Keyboard = () => {
  // Example of a QWERTY layout
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  // State to track the selected key
  const [selectedKey, setSelectedKey] = useState(null);

  // Handle key click
  const handleKeyClick = (key) => {
    setSelectedKey(key);
  };

  return (
    <div style={styles.keyboard}>
      <h3>Selected Key: {selectedKey || "None"}</h3>
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((key, keyIndex) => (
            <div
              key={keyIndex}
              style={{
                ...styles.key,
                backgroundColor: selectedKey === key ? '#c0c0c0' : '#e0e0e0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d3d3d3')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = selectedKey === key ? '#c0c0c0' : '#e0e0e0')}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const styles = {
  keyboard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  key: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',  // Increased width for better visibility
    height: '50px', // Increased height for better visibility
    margin: '5px',
    border: '2px solid #333',
    borderRadius: '8px', // Added rounded corners
    backgroundColor: '#e0e0e0',
    fontSize: '18px', // Increased font size
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease', // Added smooth hover effect
  },
  keyHover: {
    backgroundColor: '#d3d3d3', // Hover color
  },
};

export default Keyboard;
