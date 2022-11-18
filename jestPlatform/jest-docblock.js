// Tool for extracting and parsing the comments at the top of a JavaScript file. Exports various functions to manipulate the data inside the comment block.
const {parseWithComments} = require('jest-docblock');
// need to install jest-docblock
const code = `
/**
 * This is a sample
 *
 * @flow
 */

 console.log('Hello World!');
`;

const parsed = parseWithComments(code);

// prints an object with two attributes: comments and pragmas.
console.log(parsed);