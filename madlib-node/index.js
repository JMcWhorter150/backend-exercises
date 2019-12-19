const catNames = require('cat-names');
const supervillains = require('supervillains');
const superb = require('superb');
const petDefense = require('./defense');

const catName = catNames.random();
const supervillain = supervillains.random();
const superbAdj = superb.random();

const sentence = petDefense(catName, supervillain, superbAdj);
console.log(sentence);