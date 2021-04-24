### callback functions 


**__Introduction__**
- One of the most powerful and widely used programming patterns in javascript 
- They must have an explisist return
- They can be reference by name without invoking them 

**__First Class Objects__**
- Callback functions are known as first class objects:
    - meaning they can be stored as a variable or as a property on an object
    - They can be returned from a function 
    - They can be passed as an argument into another function (what callback functions are all about)
- When writing a callback function, the keyword callback is used as a placeholder for the function we are calling back. This is important for convention sake.
- Callback is not a keyword argument, it can have anyname.

```

function add(a,b){
    console.log( a + b);
 }

function multiply(x, y){
    console.log(x * y);
}

 function doMath(num1, num2, cb){
     console.log("processing");
    cb(num1, num2)
 }

doMath(10, 20, multiply)


```

- Basic example of a callback function
- A callback function is a function thats passed into another function as an arguement and then is invoke at some point in that function