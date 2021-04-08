// let age = 18
// let id = false;

// if(age > 18 && id) {
//     console.log("welcome in");

// } else if(age < 18 && !id) {
//     console.log("you need id");

// } else if(age < 18){
//     console.log("you're too young");

// } else{
//     console.log("Bar's closed");
// }

// let age = 20;

// let myLocation = prompt("Where do you live?");

// switch(myLocation){
//     case "Melbourne":
//         console.log("Go Demons");
//         break;
//     case "Sydney":
//         console.log("Go Swans");
//         break;
//     case "Adelaide":
//         console.log("Go Crows");
//         break;
//     default:
//         console.log("go football");
    
// }


// Multiplies the sum of the numbers in the array by some number
// function multiplySum(num,arr) {
// 	let sum = 0;
// 	for(num of arr) {
// 		sum += num;
//         // console.log(sum)
// 	}
// 	return sum*num;
//     console.log(sum)
    
// }

// let factor = 3;
// let numArray = [3,2,1];
// answer = multiplySum(factor,numArray);
// console.log("Expect 3 * 6(18) and got: " + answer);




function multiplySum(num,arr) {
    let count = 0;
    let sum = 0; 

    while(count < arr.lenght - 1) {
        sum += arr[count]
        console.log(arr[count])
        count ++
    }
    console.log(sum)
}


let factor = 3;
let numArray = [3,2,1];
// answer = multiplySum(factor,numArray);
// console.log("Expect 3 * 6(18) and got: " + answer);
multiplySum(factor,numArray);



























