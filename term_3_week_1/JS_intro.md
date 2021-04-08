### What you'll learn

- What is Javascript?
- History
- Javascript in the browser
- A first javascript app
- Data Types
- Variables 

#### JavaScript 

- Dynamically-typeed (like RUby or Python)
- INterpreted or JIT-compiled
- The only language a web browser natively understands 
- Synthax insipred by C/C++/JAva
- Client (web browser) or server-side (via NodeJS)

**__Important facts__**
- Created in 1996 by Brendan Eich (co-founder of Mozilla)
- Javascript has nothing to do with java except theier names and similar synthax
- The first version of JS was written in 10 days 


**__Javsacript in the browser__**
- HTML can embed javascript files into the web page via a Script tag 

**__How does javascript get loaded__**
- The browser is parson the HTML file, and gets to a script tag, so it knows it needs to get the script files as well.
- The broswer makes a request to the server for the script.js file, just like it would for a css file.
- The servers responds with the javascript file, just like it would with a CSS file or an image.
- The javascript will execute "Client-side", or in the browser on the users computer


**__JavaScript execution__**

There is no "Main method"
    - The script file is executed from top to bottom.

There's no compilation by the developer 
    - Javascript is compiled and executed on the fly by the browser, a process called just-in-time (JIT) compliation.
    - Alot of languages that have to compile their source code to machine code before being excuted, with Javascript we don't have to do that

 **__Creating a JS app walkthrough__**   
 - Javascript recognises all numbers as floats....
 - double equals performs a type coercion on camprisions, making both values to have the same type
 - tripple equals or strict equals compares value and type (===)
 - Always use tripple equals or strict equals to stop javascript from performing the type coercion
 - Javascript as a dot notation for retreiving inner objects in an object
 ```
    const person {
        name: 'John',
        age: 25,
        job: 'Front-end Developer'
    }

    person.name 
    = 'John'

    person.job 
    = 'Front-end Developer'
 ```
 - Javascript allows arrays to have multiple values within the arrays as in number, string etc 
 - Square bracket notion is used to access different properties within the array
 ```
    const arr = ['matt', 'simon', 'james'];

    arr[0]
    = 'matt'
 ```

  **__Things to note__**
  - .push() method inserts an item on the end of an arrya
  - .unshift() method inserts an item at the start of an array
  - pop removes an item from the end of an array and return the value 
  - shift removes and returns an item from the beginnign of an array