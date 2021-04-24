const people = ["Alex", "Harry", "Bianca", "Janel", "Michael", "Jario", "Varsha"];


// console.log(people.map(name => "hello" + " " + name));
// console.log(people.filter(name => name.length < 6));

function lessThanFive(word) {
    return word.length < 10;
}

console.log(people.filter(lessThanFive));