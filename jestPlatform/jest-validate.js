const {validate} = require('jest-validate');

const configByUser = {
  transform: '<rootDir>/node_modules/my-custom-transform',
};

const result = validate(configByUser, {
  comment: '  Documentation: http://custom-docs.com',
  exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},
});

console.log(result);


// Tool for validating configurations submitted by users. Exports a function that takes two arguments: the user's 
// configuration and an object containing an example configuration and other options. The return value is an object with two attributes:

// hasDeprecationWarnings, a boolean indicating whether the submitted configuration has deprecation warnings,
// isValid, a boolean indicating whether the configuration is correct or not.