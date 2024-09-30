import React from 'react';

const Keyboard = () => {
  // Example of a QWERTY layout
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  return (
    <div style={styles.keyboard}>
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((key, keyIndex) => (
            <div key={keyIndex} style={styles.key}>
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
    width: '40px',
    height: '40px',
    margin: '5px',
    border: '1px solid #000',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
  },
};

export default Keyboard;
