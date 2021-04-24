// function processInput(input, callback) {
//     callback(input);
// }

// function greet(name) {
//     console.log(`hello ${name}`);
// }

// function excitedGreet(name) {
//     console.log(`HI THERE ${name.toUpperCase()}!!!!!`)
// }

// processInput("Alex", greet)
// excitedGreet("John", excitedGreet)

// function add(a,b){
//     console.log( a + b);
// }

// function multiply(x, y){
//     console.log(x * y);
// }

// function doMath(num1, num2, cb){
//     console.log("processing");
//     cb(num1, num2)
// }

// doMath(10, 20, multiply)

// doMath(5, 5, function(num1, num2){
//     console.log(num1 / num2)
// })

// doMath(2, 3, (a, b) => {
//     console.log(a * b);
// })


// function modifySentence(sentence, modifier) {
//     return sentence.split(" ").map(modifier).join(" ");
// }

// function capitalise(word) {
//     return word[0].toUpperCase() + word.substring(1);
// }

// console.log(modifySentence("hello there friend", capitalise))

function modifiedSentence(sentence, modifier) {
    return sentence.split(" ").map(modifier).join(" ")
}

function noCovid(word) {
    return word.toLowerCase() === "covid19" ? "Novid19" : word
}

console.log(modifiedSentence("This is covid19", noCovid))