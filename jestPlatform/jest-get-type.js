// need to install jest-get-type
const {getType} = require('jest-get-type');

const array = [1, 2, 3];
const nullValue = null;
const undefinedValue = undefined;
const str="Rahul"
const num=3522

// prints 'array'
console.log(getType(array));
//prints 'string'
console.log(getType(str));
// prints 'null'
console.log(getType(nullValue));
// prints 'undefined'
console.log(getType(undefinedValue));
//prints 'number'
console.log(getType(num));