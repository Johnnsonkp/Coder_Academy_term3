// let kanye = [{
//     name: "K.West",
//     nickname: "Ye",
//     dateOfBirth: "1977-06-08"}]

// let drake = {
//     name: "A.Graham",
//     nickname: "Drake",
//     dateOfBirth: "1986-10-24"
// }

// let kanyeString = {
//     "name": "K.West",
//     "nickname": "Ye"
// }

// console.log(JSON.parse(kanye));

// const saveEarth = require('./people.json');
// // const members = JSON.parse(saveEarth).members
// const {members, location, groupName} = saveEarth

// for(let member of members){
//     console.log(`${member.name} - ${member.age} from ${location}`);
// }




// function gps(s, x){
//     // your code
//     // FIGURE OUT INTERNALS/SECTIONS
//     // TURN THAT INTO SPEED
//     // GET ARRAY OF AVG SPEEDS
//     // GET MAX
//     // ROUND DOWN TO FLOOR INT 
    
//     let sections
//     console.log(s);
//     console.log(x);
// }

const exesAndOhs = (string) => {
	// Your code here
	string.toLowerCase();

	let oCount = 0;
	let xCount = 0;

	for(let i = 0; i < string.length; i++){
    
		if(string.charAt(i) === 'x'){
			oCount ++;
		} 
		if(string.charAt(i) === 't'){
			xCount ++;
		}
	}

	return(oCount === xCount);

}