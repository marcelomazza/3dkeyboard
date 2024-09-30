import React, { useState } from 'react';

const Keyboard = () => {
  // Layout presets
  const layouts = {
    qwerty: [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ],
    azerty: [
      ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
      ['W', 'X', 'C', 'V', 'B', 'N'],
    ],
  };

  const [keys, setKeys] = useState(layouts.qwerty); // Default to QWERTY layout
  const [selectedKey, setSelectedKey] = useState(null);

  const handleKeyClick = (key) => {
    setSelectedKey(key);
  };

  const handleLayoutChange = (e) => {
    const selectedLayout = e.target.value;
    setKeys(layouts[selectedLayout]);
  };

  return (
    <div style={styles.keyboard}>
      <h3>Selected Key: {selectedKey || 'None'}</h3>

      {/* Layout selection dropdown */}
      <select onChange={handleLayoutChange}>
        <option value="qwerty">QWERTY</option>
        <option value="azerty">AZERTY</option>
      </select>

      {keys.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((key, keyIndex) => (
            <div
              key={keyIndex}
              style={{
                ...styles.key,
                backgroundColor: selectedKey === key ? '#c0c0c0' : '#e0e0e0',
              }}
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
    width: '50px',
    height: '50px',
    margin: '5px',
    border: '2px solid #333',
    borderRadius: '8px',
    backgroundColor: '#e0e0e0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};

export default Keyboard;
