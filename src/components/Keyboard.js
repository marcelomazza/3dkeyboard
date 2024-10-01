import React from 'react';

const Keyboard = ({ layout, onKeySelect, selectedKey }) => {
  return (
    <div className="keyboard" style={{ position: 'relative', width: '100%', height: '180px' }}>
      {layout.map((key) => (
        <button
          key={key.id}
          className={`key ${selectedKey && selectedKey.id === key.id ? 'selected' : ''}`}
          style={{
            position: 'absolute',
            left: `${key.x * 40}px`,
            top: `${key.y * 60}px`,
            width: `${(key.width || 1) * 35}px`,
            height: '35px',
            backgroundColor: key.color,
            color: 'white',
            border: selectedKey && selectedKey.id === key.id ? '2px solid white' : 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: selectedKey && selectedKey.id === key.id ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
            transition: 'all 0.3s ease',
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
