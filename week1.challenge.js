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




function multiplyValue(value, times) {
	// Your code here

	if(!['string', 'number'].includes(typeof value)) return null;
	if(typeof times !== 'number') return null;

	if (typeof value === 'string'){
		return value.repeat(times);
	}

};

// module.exports = {multiplyValue}

multiplyValue("john", 10)



function multiplyValue(value, times) {
    if (!['string', 'number'].includes(typeof value)) return null;
    if (typeof times !== 'number') return null;

    if (typeof value === 'string') {
        return value.repeat(times);
    }

    return value * times;
};