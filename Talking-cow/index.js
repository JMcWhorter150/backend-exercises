// converts input from array into string with spaces
const cowsay = require('cowsay');
const words = process.argv.slice(4).join(' ');
const e = process.argv[2];
const T = process.argv[3];

const theCowSaid = cowsay.say({
    text : words,
    e : e,
    T : T
})

console.log(theCowSaid);