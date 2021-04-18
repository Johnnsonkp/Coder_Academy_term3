### Unit Testing 

**__Overview__**
- Start a new NPM project
- Install Jest
- Write some tests

**__Jest test__**
- When you run jest it will automatically look for any js file with the word 'test' in it and it will run that file.

To use jest test we must enter these lines of code in the test/example.test.js
```
const { inchesTocm } = require("../src/inches-to-cm")

describe('inchesToCm', () => {
    it('converts from inches to cm', () => {
        expect(inchesTocm(1)).toBe(2.54)
        expect(inchesTocm(2)).toBe(5.08)
        expect(inchesTocm(4)).toBe(10.16)
    })
})

```
note: ** Everything within the it block is a suite, each line of code within the suite is a test..

then:
- run npm i jest
- in the package.json file we need to amened 'test' key and enter 'jest' as its value...
```
{
  "name": "jest_testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jest": "^26.6.3"
  }
}


```
- To run the test we use: npm run test