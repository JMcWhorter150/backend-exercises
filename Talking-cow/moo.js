const cowsay = require('cowsay');

// const theCowSaid = cowsay.say({
//     text : words,
//     e : e,
//     T : T
// })

function moo(text, eyes, tongue) {
    return cowsay.say({
        text : text,
        e : eyes,
        T : tongue,
    })
}

// module.exports = moo;

// console.log(cowsay.say({text: "stuff and stuff", e: "Oo",}));