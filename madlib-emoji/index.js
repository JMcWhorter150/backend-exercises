const findEmotion = require('./findemotion');

const input = process.argv.slice(2);
const resultArray = input.map(findEmotion);
// console.log(resultArray);
const resultString = resultArray.join(" ");

console.log(resultString);