### Error first call back pattern 

- Using callback functions to write code thats modular and compisible allows us the benefoit to reason about th eerrors in our application and allows us to handle those erros in a variety of different ways.
- Comming standard way for handling errors amng node js developers
- Community ddecided protocl of handler erros when using callbacks 

example of error first callback patterns

```
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

```