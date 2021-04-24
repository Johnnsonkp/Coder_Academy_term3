function doMath(num1, num2, callback) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
        const err = new Error("can only perfom math on numbers")
        return callback(err);
        
    }
    callback(null, num1, num2);
}

function multiply(err, a, b) {
    if(err) {
        return console.error(err.message)
    }
    console.log(a * b)
}

function add(err, x,y){
    if(err) {
        return console.error(err.message)
    }
    console.log(x+y);
}


doMath(2, "5", multiply);
doMath(3, 3, add)