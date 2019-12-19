const findEmotion = require('./findemotion');
const findRhyme = require('./findRhyme');
const rhymes = require('rhymes');

const input = process.argv.slice(2);
const resultArray = input.map(findEmotion);
const rhymingArray = resultArray.map(findRhyme);
// console.log(resultArray);
const resultString = rhymingArray.join(" ");

console.log(resultString);