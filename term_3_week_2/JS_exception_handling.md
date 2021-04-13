### Exceptions in Javascript

- In ruby we would use begin and rescue keywords to do exception handling:
    - If at any point an error occurs while running the code, the rescue code will kick in to resuceerros gracefully

**__Node __**
- Node is a Javascript runtime that runs on the terminal, rather than having to run javascript in the broswer... which is very handy.


**__Throwing an error__**
```
throw "This is an error"

```
- We can throw an error by using the throw keyword + an error message.
- This raises an exception or better referred to as throwing an exception - Tells javascript an error occured and this is the error message

**__Handling an error__**
```
try {
    throw "This is an error"
} catch (e) {
    console.log(`Error: ${e}`)
} finally {
    console.log('finally!')
}

```
- The try and catch block will try and excute the code in the try block, but if at any point a exception(error) it will immidiatlyl transfer control to the catch block to excute the console.log code.
- The catch block in Javascript is similar to the recue block in Ruby.
- This is the process for writing your own personalised error message...
- This finally block is to add a clean up to the error handling...