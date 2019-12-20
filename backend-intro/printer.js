// Importing the sentiment module from the project's node_modules directory
const Sentiment = require(`sentiment`);

// Create a new Sentiment analyzer object/instance
const sentiment = new Sentiment();

function printContents(error, buffer) { // when logging buffer streams etc. error comes first, buffer is random text like stream, used for callbacks
    if (error) {
        console.log(error);
    } else {
        console.log(buffer.toString());
    }
}

function printSentiment(error, buffer) {
    if (error) {
        console.log(error);
    } else {
        const result = sentiment.analyze(buffer.toString());
        console.dir(result);
    }
}

// Doesn't work because it's assignment and sentiment overwrites printContents
// module.exports = printContents;
// module.exports = printSentiment;


// You can omit the colon and the value if the value is the same word as the key
module.exports = {
    printContents,
    printSentiment,
};