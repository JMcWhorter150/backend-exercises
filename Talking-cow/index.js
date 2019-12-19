// converts input from array into string with spaces
const moo = require('./moo');
const words = process.argv.slice(4).join(' ');
const e = process.argv[2];
const T = process.argv[3];

console.log(moo(words, e, T));