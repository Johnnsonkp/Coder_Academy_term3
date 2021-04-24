function add(num){
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    return num1 + num2;
}

function subtract(num){
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    return num1 + num2;
}

function multiply(num){
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    return num1 + num2;
}

function calculate(a, b, callback) {
    callback(a, b);
}

calculate(1,5, add);