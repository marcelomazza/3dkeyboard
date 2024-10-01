module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'react/jsx-no-undef': 'off',  // Temporarily disable this rule
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
