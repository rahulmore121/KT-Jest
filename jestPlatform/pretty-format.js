const {format: prettyFormat} = require('pretty-format');
// Exports a function that converts any JavaScript value into a human-readable string. Supports all built-in JavaScript 
// types out of the box and allows extension for application-specific types via user-defined plugins.

const val = {object: {}};
val.circularReference = val;
val[Symbol('foo')] = 'foo';
val.map = new Map([['prop', 'value']]);
val.array = [-0, Infinity, NaN];

console.log(prettyFormat(val));