function modifySentence(sentence, modifier) {
    return sentence.split(" ").map(modifier).join(" ")
}

function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1);
}

function noCovid(word){
    return word.toLowerCase() === 'covid19' ? 'novid' : word
}

let capitalisedSentence = modifySentence('hello there sydney', capitalise)
