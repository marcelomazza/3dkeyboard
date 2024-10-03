import React, { useState } from 'react';
import KeyComponent from './KeyComponent'; // Assuming you have a separate KeyComponent

const KeyAdditionPanel = ({ onAddKey }) => {
  const [newKey, setNewKey] = useState({ label: '', width: 1, row: 1 });

  const handleAddKey = () => {
    onAddKey(newKey);
    setNewKey({ label: '', width: 1, row: 1 });
  };

  return (
    <div className="key-addition-panel">
      <h3>Add a New Key</h3>
      <label>
        Key Label:
        <input
          type="text"
          value={newKey.label}
          onChange={(e) => setNewKey({ ...newKey, label: e.target.value })}
        />
      </label>
      <label>
        Key Width:
        <input
          type="number"
          min="1"
          max="5"
          value={newKey.width}
          onChange={(e) => setNewKey({ ...newKey, width: Number(e.target.value) })}
        />
      </label>
      <label>
        Row:
        <input
          type="number"
          min="1"
          max="6"
          value={newKey.row}
          onChange={(e) => setNewKey({ ...newKey, row: Number(e.target.value) })}
        />
      </label>

      <div className="key-preview">
        <h4>Key Preview:</h4>
        <div className="keyboard-row">
          <KeyComponent label={newKey.label} width={newKey.width} isEditMode={true} />
        </div>
      </div>

      <button onClick={handleAddKey}>Add Key</button>
    </div>
  );
};

export default KeyAdditionPanel;
