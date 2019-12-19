const rhymes = require('rhymes');

function findRhyme(word) {
    const wordRhymes = rhymes(word);
    const rhymeWordObj = wordRhymes.reduce((highestScoreObj, currentObj) => {
        // console.log(highestScoreObj, currentObj);
        if (highestScoreObj.word === word) {
            return currentObj;
        } else if (highestScoreObj.score < currentObj.score) {
            return currentObj;
        } else {
            return highestScoreObj;
        }
    }, {word: "no rhyme", score: -10});
    if (rhymeWordObj.word === "no rhyme") {
        return word;
    } else {
        return rhymeWordObj.word;
    }
}


// console.log(findRhyme('cat'));
module.exports = findRhyme;