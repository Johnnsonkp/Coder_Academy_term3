let firstName = "Alex"

console.log(typeof firstName);
console.log(firstName.length);

let names = ["Ana", "Rhys", "Yuri"];
names.push('Irina');
console.log(names[0]);


let alexObject = {
    name: "Alex",
    age: 33,
    location: "Melbourne",
    work: {
        company: "COderAcadmey",
        campus: "Melbourne",
        students: ["Ana", "Rhys", "Yuri"]
    }
};

// to retrive campus 
// alexObject.work.campus 

// to retrive yuri
// alexObject.work.students[2]