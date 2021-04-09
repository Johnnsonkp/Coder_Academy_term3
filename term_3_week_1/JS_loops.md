### Loops

- Handy way of repeating a block of code (emphanzing the dry pirnciple0

**_For loop__**

```
for (let counter = 0; counter < 5; counter++) {
    console.log(`This message has appeared ${counter} previous times.`);
}
```

**_Fun with `for` loops__**

```
const storedPassword = 'password123';

for(let attemptsRemaning = 5; attemptsRemaning > 0){
    let userInput = prompt("What is the password?");
    if(userInput == storedPassword) {
        alert('Success')
        break;
    } else{
        attemptsRemaining--;
    }
}


```

**_`While` loops__**
- Repeat while true 
- Always create a chance for the loop to beocme false at one point otherwise we end uo in  an infnite loop.

```
let olympicMedals = 0;

while (olympicMedals < 10) {
    olympicMedals++;
    console.log("You won another Olympic medal!");
}

console.log("Okay, you have 10, that's enough for one day!");

```

**_Looping over arrays__**
- Arrays are collections that have thier own set of functions for loops built in..
- Some of these functions allow you to do a block of code and use the data from each indivudal item of the array, each element of the array and do somehting with it in that block of code.

**__forEach__**

``` 

let rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

rainbowColours.forEach(colour => {
    console.log(`This fancy colour ${colour} is in the rainbow!`);
})

```

- forEach allows you loop through and manipulate data in an array however it doesn't store it anywhere...
- To save the results of the loop as a new array we use `map`

**__map__**

```

let capitalizedColourNames = rainbowColours.map(colour => {
    return color.tuUpperCase();
})

```
- This piece of code returns uppcase values for each element within the array
- The mutated version of the code is stored in capitalizedColorNames variable 


**__forEach vs map__**
- forEach: runs an operation and has access to a specific entry as it iterates, it doesn't return anything.
- Map: constructs a new array based on the array it's using, with accress to a specific entery in the orginal array as it ietarated through it