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

// const string = "ooootttt"
// let oCount = 0;
// let tCount = 0;

// for(let i = 0; i < string.length; i++){
    
//     if(string.charAt(i) === 'o'){
//         oCount ++;
//     } else if(string.charAt(i) === 't'){
//         tCount ++;
//     }
// }

// console.log(oCount)
// console.log(tCount)
// console.log(oCount == tCount);

// const exesAndOhs = (string) => {
// 	// Your code here
// 	string.toLowerCase();

// 	let oCount = 0;
// 	let xCount = 0;

// 	for(let i = 0; i < string.length; i++){
    
// 		if(string.charAt(i) === 'x'){
// 			oCount ++;
// 		} else if(string.charAt(i) === 't'){
// 			xCount ++;
// 		}
// 	}

// 	return(oCount === xCount);

// }

// const string = "xxxooo";

// // const exesAndOhs = (string) => {

// function exesAndOhs(string) {
// 	// Your code here
// 	string.toLowerCase();

// 	let oCount = 0;
// 	let xCount = 0;

// 	for(let i = 0; i < string.length; i++){
    
// 		if(string.charAt(i) === 'x'){
// 			oCount ++;
// 		} 
// 		if(string.charAt(i) === 't'){
// 			xCount ++;
// 		}
// 	}

// 	console.log(oCount === xCount);

// }

// exesAndOhs(string)


// function x(string) {
// 	// Your code here
// 	// loop through string 
// 	// Capitalise the first letter on the string
// 	// add toLowerCase() to the other letters of the string

// 	// let firstLetter = [];
// 	// let otherLetters = [];

// 	// const newString = [];
// 	// string = string.toLowerCase().split(" ").map(word => word[0].toUpperCase().concat(word.slice(1)))
	
// 	// console.log(string.join(" "))
	

// 	// step 1. Check if the string contains only one array
// 	// if(string.split(" ").length === 1){
// 	// 	string = string.toLowerCase()
// 	// 	const firstLetter = string.charAt(0).toUpperCase()
// 	// 	console.log(firstLetter + string.slice(1))
// 	// }

// 	// step 2. make all letters lowercase form 
// 	// step 3. split each word into seperate arrays of string
// 	string = string.toLowerCase().split(" ")
	
// 	// step 4. map through arrays uppercasing the first letter 
// 	for(let i = 0; i < string.length - 1; i++){
// 		// string = string.toLowerCase().split(" ")

// 		if(string.split(" ").length === 1){
			
// 			string = string.toLowerCase()
// 			const firstLetter = string.charAt(0).toUpperCase()
// 			console.log(firstLetter + string.slice(1))

// 		}

// 		const newStr = string.map(word => word[0].toUpperCase() + word.substring(1))
// 		console.log(newStr.join(" "))
// 	}

// 	// console.log(string)
	
	

// }


// // x("hello world")
// x("HELLO")


// function narcissisticNumber(number) {
// 	// you code here

// 	num = 0;

// 	// compare number to 

// 	// Last digit of number to the power of all numbers
// 	const numStr = number.toString()
// 	const lastDigit = numStr[numStr.length -1]
	
// 	for(let i = 0; i < numStr.length; i++){
// 		num += numStr[i] ** lastDigit
// 		// console.log(num) 
// 	}

// 	// console.log(num) 
// 	console.log(num === number)
// 	// num = lastDigit * numStr[numStr.length -2]
// 	// pass total of the power of all numbers to num variable 

// 	// console.log(lastDigit)
// 	// console.log(num)
// }	

// // narcissisticNumber(153)
// narcissisticNumber(1634)

// console.log(narcissisticNumber(12))
// console.log(narcissisticNumber(123))
// console.log(narcissisticNumber(153))
// console.log(narcissisticNumber(1634))



// function sayHi(name) {
//     console.log("hi", name)
// }

// function greet(name, callback){
//     callback(name)
// }

// greet('Emma', sayHi)

// callback is a plcaeholder for the function being called back 

// let value = "hello";

// function capitalise(value) {
// 	// value = 
// 	console.log(value.map(word => word[0].toUpperCase() + word.substring(1)).join(' '))
// }

// function retrieveNum(value, callback){
// 	callback(value)
// }

// retrieveNum(["hello", "bye"], capitalise)

// const newStr = string.map(word => word[0].toUpperCase() + word.substring(1))


// function isNumber(value) {

// 	// if(value.filter(num => typeof(num) === 'number')){
// 	// 	console.log(value)
// 	// }
// 	// console.log(false)

// 	// value.forEach((num) => {
// 	// 	if(typeof(num) === 'number'){
// 	// 		console.log(num)
// 	// 	}
// 	// })

// 	// console.log(value.filter(num => typeof(num) === 'number'))

// 	// if(value.filter(num => typeof(num) === 'number')){
// 	// 	// console.log(true)
// 	// 	console.log(value)
// 	// } else {
// 	// 	console.log(false)
// 	// }

// 	// if(value.filter(num => typeof(num) === 'number'))

// 	const newValue = value.filter(num => typeof(num) === 'number')

// 	if(value.filter(num => typeof num === 'number')){
// 		console.log(newValue);
// 		return(true)
// 	}
// 	return(false)
	
// }

// function getTheNumbers(list, callback) {
// 	callback(list)
	
// }

// // isNumber([1])
// getTheNumbers(["hello", "bye", 1, 4, "today", 500], isNumber)


// function shortToLong(val1, val2) {
// 	let newArr = []
// 	newArr.push(val1, val2)

// 	console.log(newArr.toString().sort())
// }

// shortToLong(10, 20)

// function shortestToLongest(val1, val2, callback) {
// 	callback(val1, val2)
// }

// shortestToLongest([1,4,0], shortToLong)


// Write a function that will take a string as an argument. The method will check this string, and count the amount of 'x's and 'o's. It should return true if the amount of 'x's and 'o's are the same, and should return false if they are different. It should also be case insensitive


// function exesAndOhs(string){

// 	// It should also be case insensitive
// 	string = string.toLowerCase()

// 	// count the amount of 'x's and 'o's.
// 	let xCount = [];
// 	let oCount = [];

// 	//The method will check this string, and count the amount of 'x's and 'o's.
// 	for(let i = 0; i < string.length; i++){

// 		if(string.charAt(i) === 'x'){
// 			xCount.push(string.charAt(i))
// 		}
// 		if(string.charAt(i) === 'o'){
// 			oCount.push(string.charAt(i))
// 		}
// 	}
// 	console.log(`This is x count: ${xCount.length}`)
// 	console.log(`This is o count: ${oCount.length}`)

// 	console.log(xCount.length === oCount.length)

	
// }


// exesAndOhs("xxxooo")







// Callback functions for filter or find are used to filter values from an iterable collection that meet some criteria. Therefore they test some condition for each value in an iterable collection, and return true or false.  You will implement the isNumber function to use with filter to get all numbers from a collection.


// isNumber 
// Return true if value has a number data type
// function isNumber(value) {
	
// 	if(typeof(value) === 'number'){
// 		return(true)
// 	}

// }

// // getTheNumbers
// //   Parameter: list
// //      An array of different kinds of data (numbers, strings, etc)
// //   Returns an array that only contains the numbers from list
// // Use filter and isNumber to return all the numbers in list
// function getTheNumbers(list, callback) {	
// 	const newVar = list.filter(num => isNumber(num) === true)
// 	console.log(newVar)
// }

// getTheNumbers([10, 20, "hello", 50, "John", 20, "are you sure?"], isNumber)


// function capitalise(value) {
// 	// return(value.map(word => word[0].toUpperCase() + word.substring(1)).join(' '))

// 	return(value[0].toUpperCase())
// 	// return(value.capitalise() + value.substring(1))
// }


// function capitaliseFirst(strings, callback) {
// 	// console.log(callback(strings))
// 	// console.log(callback(strings.map(word => word[0].toUpperCase() + word.substring(1)).join(' ')))

// 	let arr = []
// 	strings.forEach(string => {
// 		arr.push(strings)
// 	})
	
// 	console.log(arr)
// 	console.log(arr.map(word => callback(word)))
// }


// capitaliseFirst(["hello", "bye", "chow"], capitalise)
// // capitaliseFirst("hello", capitalise)
// console.log(capitaliseFirst(["this is the first.", "this is second.", "finally the last one."]))

// function commonCharacters(string1, string2) {
// 	string1 = string1.toLowerCase()
// 	string2 = string1.toLowerCase()

// 	if(string1 === ''|| string2 === '') {
// 		console.log('')
// 	}

// 	let arr1 = [];
// 	let arr2 = [];
// 	let arr3 = [];
// 	// loop through string1
// 	for(let i = 0; i <= string1.length - 1; i++){
// 		arr1.push(string1.charAt(i))
// 		// console.log(arr1)
// 	}
// 	// loop through string2
// 	for(let i = 0; i <= string2.length - 1; i++){
// 		arr2.push(string2.charAt(i))
// 		// console.log(arr2)
// 	}

// 	for(let i = 0; i <= arr2.length - 1; i++) {
// 		arr1.forEach((letter) => {
// 			if(arr2[i] === letter){
// 				arr3.push(letter)
// 			}
// 		})
// 	}
	
// 	console.log(arr3.join(''))

// }

// commonCharacters("abc", 'abc')


// function commonCharacters(string1, string2) {
// 	let arr = []
// 	let count = string1.length > string2.length? string1.length -1 : string2.length -1

// 	for(let i = 0; i <= count; i++){
// 		string1 = string1.toLowerCase()
// 		string2 = string2.toLowerCase()

// 		if(string2.includes(string1[i]) && !arr.includes(string1[i])){
// 			arr.push(string1[i])
// 		}
// 	}
	
// 	arr = arr.map(letter => letter.trim()).join('')
// 	console.log(arr)

// }

// commonCharacters("Riding on a buffalo makes me more approachable", "so what") // ==>
// commonCharacters("What is love?", "Baby don't hurt me") //('hatoe') 
// commonCharacters("so what", "Riding on a buffalo makes me more approachable")