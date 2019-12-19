const rhymes = require('rhymes');

function findRhyme(word) {
    const wordRhymes = rhymes(word);
    if (wordRhymes === []) {
        return word;
    }
    const rhymeWordObj = wordRhymes.reduce((highestScoreObj, currentObj) => {
        // console.log(highestScoreObj, currentObj);
        if (highestScoreObj.word === word) {
            return currentObj;
        } else if (highestScoreObj.score < currentObj.score) {
            return currentObj;
        } else {
            return highestScoreObj;
        }
    }, {word: "no rhyme", score: 0});
    return rhymeWordObj.word;
}
// console.log(findRhyme('orange'));
// console.log(rhymes('orange'));
module.exports = findRhyme;