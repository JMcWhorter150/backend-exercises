const emotion = require('emoji-emotion');

function findEmotion(word) {
    const oneEmotion = emotion.filter(obj => {return (word === obj.name)});
    if (oneEmotion.length === 1) {
        return oneEmotion[0].emoji + " "; // get rid of space if you want to write to file. space included because command line looks weird
    } else {
        return word;
    }
}

module.exports = findEmotion;