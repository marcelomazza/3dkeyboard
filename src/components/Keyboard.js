import React from 'react';

const Keyboard = ({ layout, onKeySelect }) => {
  return (
    <div className="keyboard" style={{ position: 'relative', width: '100%', height: '180px' }}>
      {layout.map((key) => (
        <button
          key={key.id}
          className="key"
          style={{
            position: 'absolute',
            left: `${key.x * 40}px`,
            top: `${key.y * 60}px`,
            width: '35px',
            height: '35px',
            backgroundColor: key.color,
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => onKeySelect(key.id)}
        >
          {key.label}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
