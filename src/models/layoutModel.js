const predefinedLayouts = {
  qwerty: [
    { label: 'Esc', row: 1, width: 1 },
    { label: 'F1', row: 1, width: 1 },
    { label: 'F2', row: 1, width: 1 },
    { label: 'F3', row: 1, width: 1 },
    { label: 'F4', row: 1, width: 1 },
    { label: 'F5', row: 1, width: 1 },
    { label: 'F6', row: 1, width: 1 },
    { label: 'F7', row: 1, width: 1 },
    { label: 'F8', row: 1, width: 1 },
    { label: 'F9', row: 1, width: 1 },
    { label: 'F10', row: 1, width: 1 },
    { label: 'F11', row: 1, width: 1 },
    { label: 'F12', row: 1, width: 1 },
    
    // Row 2: Numbers and Backspace
    { label: '`', row: 2, width: 1 },
    { label: '1', row: 2, width: 1 },
    { label: '2', row: 2, width: 1 },
    { label: '3', row: 2, width: 1 },
    { label: '4', row: 2, width: 1 },
    { label: '5', row: 2, width: 1 },
    { label: '6', row: 2, width: 1 },
    { label: '7', row: 2, width: 1 },
    { label: '8', row: 2, width: 1 },
    { label: '9', row: 2, width: 1 },
    { label: '0', row: 2, width: 1 },
    { label: '-', row: 2, width: 1 },
    { label: '=', row: 2, width: 1 },
    { label: 'Backspace', row: 2, width: 2 },
    
    // Row 3: QWERTY
    { label: 'Tab', row: 3, width: 1.5 },
    { label: 'Q', row: 3, width: 1 },
    { label: 'W', row: 3, width: 1 },
    { label: 'E', row: 3, width: 1 },
    { label: 'R', row: 3, width: 1 },
    { label: 'T', row: 3, width: 1 },
    { label: 'Y', row: 3, width: 1 },
    { label: 'U', row: 3, width: 1 },
    { label: 'I', row: 3, width: 1 },
    { label: 'O', row: 3, width: 1 },
    { label: 'P', row: 3, width: 1 },
    { label: '[', row: 3, width: 1 },
    { label: ']', row: 3, width: 1 },
    { label: '\\', row: 3, width: 1.5 },
    
    // Row 4: ASDF
    { label: 'Caps Lock', row: 4, width: 1.75 },
    { label: 'A', row: 4, width: 1 },
    { label: 'S', row: 4, width: 1 },
    { label: 'D', row: 4, width: 1 },
    { label: 'F', row: 4, width: 1 },
    { label: 'G', row: 4, width: 1 },
    { label: 'H', row: 4, width: 1 },
    { label: 'J', row: 4, width: 1 },
    { label: 'K', row: 4, width: 1 },
    { label: 'L', row: 4, width: 1 },
    { label: ';', row: 4, width: 1 },
    { label: '\'', row: 4, width: 1 },
    { label: 'Enter', row: 4, width: 2 },
    
    // Row 5: ZXCVB
    { label: 'Shift', row: 5, width: 2.25 },
    { label: 'Z', row: 5, width: 1 },
    { label: 'X', row: 5, width: 1 },
    { label: 'C', row: 5, width: 1 },
    { label: 'V', row: 5, width: 1 },
    { label: 'B', row: 5, width: 1 },
    { label: 'N', row: 5, width: 1 },
    { label: 'M', row: 5, width: 1 },
    { label: ',', row: 5, width: 1 },
    { label: '.', row: 5, width: 1 },
    { label: '/', row: 5, width: 1 },
    { label: 'Shift', row: 5, width: 2.75 },
    
    // Row 6: Spacebar
    { label: 'Ctrl', row: 6, width: 1.5 },
    { label: 'Alt', row: 6, width: 1.5 },
    { label: 'Space', row: 6, width: 7 },
    { label: 'Alt', row: 6, width: 1.5 },
    { label: 'Ctrl', row: 6, width: 1.5 }
  ]
};

let customLayout = [];

const layoutModel = {
  getLayout: (type = 'qwerty') => {
    if (type === 'custom') {
      return customLayout;
    }
    return predefinedLayouts[type];
  },
  addKey: (label, width = 1, row = 1) => {
    customLayout.push({ label, width, row });
  },
  removeKey: (label) => {
    customLayout = customLayout.filter(key => key.label !== label);
  },
  modifyKey: (label, newProperties) => {
    customLayout = customLayout.map(key =>
      key.label === label ? { ...key, ...newProperties } : key
    );
  }
};

export default layoutModel;
