// This challenge uses arrays and array methods, which we have not covered yet. This resource may help:

// Arrays
// In an html file, inside of a <script> tag:

// Assign an empty array to a students variable.
// Use the push method to add a student called Sarah
// Use prompt to ask the user for their name, add it to the array.
// Use a loop to ask the user for 3 names, add them all to the array.
// Loop through the array and use the alert method to read each user back to the user.


// Occasionally, we will need to validate certain data to ensure it is meeting our set standards. A prime example of that is a password.

// Create a file called datatypes.js and add the functions indicated below.

// The syntax for javascript functions is:

// function getLength(arg) {
//     // your code here
//     console.log(arg.length)
// }
// Write a function called getLength that will take a string as input, and return the length of the string.
// E.g. getLength(“hello”) should return 5

// E.g. getLength(“two words”) should return 9


// function checkLength(str){
//     if(str.length < 5){
        
//     }
// }
// Write a function called checkLength that takes a string as input and returns “Too short” if the string has less than 5 characters, and otherwise returns the string length. Use your getLength function to keep your code DRY


// Write a function called largestNumber that takes an array of numbers as input and returns the largest number.




// function multiplyValue(value, times) {
// 	// Your code here

// 	if(!['string', 'number'].includes(typeof value)) return null;
// 	if(typeof times !== 'number') return null;

// 	if (typeof value === 'string'){
// 		return value.repeat(times);
// 	}

// };

// // module.exports = {multiplyValue}

// multiplyValue("john", 10)



// function multiplyValue(value, times) {
//     if (!['string', 'number'].includes(typeof value)) return null;
//     if (typeof times !== 'number') return null;

//     if (typeof value === 'string') {
//         return value.repeat(times);
//     }

//     return value * times;
// };




// function findIndexInArray(array, element) {
//     // when given an array and an element, return that element's index from the array
//     const index = array[element]
//     console.log(index);
// }

// let array = [1,2,3,4];

// findIndexInArray(array, 0)

// function liftOff(time) {
//     let counter = 0
    
//     do {
//         console.log(`T-minus ${time}`);

//         time --;
//     } while(counter < time)
    
//     console.log("LIFTOFF!");
// }

// liftOff(3);


// function loopPractice() {
//     for(let count = 0; count < 10; count ++){
//         console.log("Hello World");
//     }
// }

// loopPractice()


// let users = [
//     {
//         username: "John",
//         password: "password123",
//         role: "public"
//     }, {
//         username: "xXxSn1p3rK1lLaxXx",
//         password: "newbDestroyer",
//         role: "public"
//     }, {
//         username: "admin",
//         password: "admin",
//         role: "admin"
//     }
// ]

// function findUser(users, username, password) {
//     for(let user in users){
//         if(`${users[user].username}` === username && `${users[user].password}` === password){
//             console.log(`My username is ${users[user].username}`);
//             console.log(`My Password is ${users[user].password}`);
//             console.log(`My Role is ${users[user].role}`);
//         } 
//     }
//     console.log(false);

// //     for(let user in users){
// //         usernameCheck = `${users[user].username}`;
// //         passwordCheck = `${users[user].password}`;

// //         usernameCheck === username && passwordCheck === password ? console.log(true) : console.log(false);
// //     }
// //     console.log(false);
// }

// findUser(users, "John", "password123")



// function fizzBuzz(start, end) {
//     let fizzBuzz = false;
    
    
//     while(start < end){
//         if(start % 3 === 0 && start % 5 === 0){
//             console.log("FIZZBUZZ");
//             fizzBuzz = true;
//             console.log(fizzBuzz);
//             break
            
//         } else if(start % 3 === 0){
//             console.log('fizz');
//             start ++;
//             continue
//         } else if(start % 5 === 0) {
//             console.log('fizz');
//             start ++;
//             continue
//         }
//         console.log(start);
//         start ++;
//     }

//     console.log(fizzBuzz)
// }


// fizzBuzz(1, 5);



// function breakWhenPrivate(array) {
//     for(let i of array){
//         if(i === "PRIVATE") {
//             break
//         }
//         console.log(i)
//     }
// }

// breakWhenPrivate(["cat", "dog", "PRIVATE", "fish", "elephant"]);
// let obj = {
//     a: ["1","2","3","4"],
//     b: ["5", "6"],
//     c: ["7", "8", "9"],
//     d: ["10", "11", "9"]
// }

// function continueWhenSmall(obj, end) {
//     for(let i in obj){
//         if(obj[i].length < 3){
//             continue
//             obj[i].forEach((arr) => {
//                 if(arr < 10){
//                     console.log(arr);
//                 } 
//             })
//         }
        
        
//     }
// } 

// continueWhenSmall(obj);