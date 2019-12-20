const fs = require('fs');
const {printContents, printSentiment} = require('./printer');
// This is the destructuring syntax

const fileName = process.argv[2];
// console.log(fileName);

// Error-first callback


fs.readFile(fileName, printSentiment);