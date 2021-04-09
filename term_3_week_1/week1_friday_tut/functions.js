function add(a, b) {
    return a + b
}

console.log(add(5, 5));

function addAll(...args){
    console.log(...args)
    args.reduce( (a,b) => a + b)
}

console.log(addAll(1, 2, 44, 10));

const greeter = function (name) {
    console.log("Hello" + name);
}

greeter("Alex");


let students = ["John", "Irina", "Ryan"]

function greetAll(){
    for (let student of students) {
        console.log("Hello " + student)
    }
}

greetAll();