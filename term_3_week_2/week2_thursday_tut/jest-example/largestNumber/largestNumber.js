// * NEEDS A FUNCTION
// * TAKES AN ARRAY
// * RETURNS LARGEST NUMBER
// * RETURNS NULL IF ARRAY EMPTY
// * HANDLES NEGATIVE NUMBERS
// * HANDLES/IGNORES NON NUMBERS

function largestNumber(arr) {
    if(!Array.isArray(arr)) {
        // console.log("largestNumber must be passed as an array")
        // return null;
        throw new Error("Function must take array");
    }
    // if(arr.length < 1) return null;
    // const numbers = arr.filter(item => typeof item === 'number')   // try to understand code
    // return Math.max(...numbers);
    let largest = arr.length > 0 ? -Infinity : null;
    for(let item of arr) {
        if(typeof item !== 'number') continue;
        if(item > largest){
            largest = item;
        }
    }
    return largest
}

module.exports = largestNumber;

// try{
//     largestNumber(50);
// } catch(error) {
//     console.log("largestNumber must be passed as an array")
// }    
// console.log("This long runs");

// largestNumber(50);