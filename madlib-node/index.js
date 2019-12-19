const fs = require('fs');
const catNames = require('cat-names');
const supervillains = require('supervillains');
const superb = require('superb');
const petDefense = require('./defense');

const catName = catNames.random();
const supervillain = supervillains.random();
const superbAdj = superb.random();

const sentence = petDefense(catName, supervillain, superbAdj) + `\n`;
// console.log(sentence);

fs.writeFile('madlibs.txt', sentence, {flag: "a"}, err => {
    if (err) {console.log(err);} else {
        console.log("File saved!");
    }
});