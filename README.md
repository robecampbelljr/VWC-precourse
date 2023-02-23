# VWC-precourse
[Vets Who Code pre-course work](https://dev.to/vetswhocode/vets-who-code-pre-work-1gld)
# Install
NOTE: This assumes you are familiar with basig git commands. It you are not, please refer to the official [git cheat sheet].

1. Fork repository to personal repository
2. Clone project to computer
3. Navigate to project parent folder in your terminal
4. Type in 'npm install' and hit 'Enter'
5. In the terminal type 'npm start' and hit 'Enter' to run the program

Note: If you wish to run all available tests, navigate to the parent directory in the terminal, type in 'npm test' and hit 'Enter'. The terminal will display all available tests and their status

# Project Outline
This project was prepared as proof of understanding of the following basic programming concepts:
* Variable assignment
* Basic Math operations
* Strings/String Methods
* Conditional logic
* Loops
* Functions
* Arrays/Array Methods
* Objects (properties/methods)

All of the following examples will be based in JavaScript.
## Variable Assignment

The seven basic data types in JavaScript are:
1. Numbers: This includes integer and float-point numbers.
2. Strings: A collection of characters encompassed by quotation marks.
3. Boolean: true or false
4. Undefined: A value assigned to a variable that is not defined or has no value.
5. Null: explicit assignment of 'non-value'
6. Objects: A collection of properties and methods to store and manipulate data.
7. Symbol: New data type as of ES6. Used as Object property key. Every Symbol is unique and cannot be modified or overwritten.

To ***declare*** a variable is to create a container in memory to which we can then ***assign*** a value. A value can be one of the aforementioned
basic data types or other complex data types (i.e. arrays). These values can later be referenced, manipulated, or reassigned throughout the code.

In JavaScript there are three ways of ***declaring*** a variable:
* **var**:  Variables declared with 'var' are **function-scoped** meaning the variable is [hoisted] to the top of the function. This allows access to the variable before it is defined.
* **let**: Variables declared with 'let' are **block-scoped** meaning they are *NOT* [hoisted]. Thus are only available within the block in which they were declared.
* **const**: Variables declared with 'const' are also **block-scoped**. _Const_ varibales cannot be changed after they have been declared. Note: If the 'const' variable is an object or an array, its properties or elements can still be modified.

_Example_

```javascript
  if (true) {
    var hw = 'Hello World!';
  }

  console.log(hw); // logs 'Hello World!' to console

  if (true) {
    let gw = 'Goodbye World!'
  }

  console.log(gw); // ReferenceError: gw is not defined
```

 To ***assign*** a variable, we follow the ***declaration*** with the '=' sign followed by the value. We can ***assign*** multiple variables in the same line, or use multiple lines.

 _Example_

```javascript
  let x = 1, y = 2, z = 3; // Declare and assign multiple on same line

  // OR

  let x = 1;
  let y = 2;
  let z = 3;
```
## Basic Math operations
* '+': Addition combines two or more values to produce a new value.
* '-': Subtraction decreases a value by another value.
* '*': Multiplication repeats a value a certain number of times.
* '/': Division finds how many times a certain number fits into another number.
* '%': Modulo returns the remainder after dividing one number by another.
* '**': Exponentiation raises a number to a certain power.

## Strings/String Methods
A string is a series of carachters contained withing a set of single ('') or double ("") quotes. A string is 0 indexed. This means that we can access any character within a string by using that characters index.

_Example_

```javascript
let string = "Supercalifragilisticexpialidoscious";
console.log(name[0]); // Logs 'S' to the console
console.log(name[1]); // Logs 'u' to the console
// etc.
```

Strigns have a plethora of methods availabe to perform operations on that string. Some of the most popular are:
* **'.length'**: '.length' returns the length of the string including spaces.

_Example_
```javascript
let string = "Supercalifragilisticexpialidoscious";
console.log(string.length); // Logs '35'
```
* **'.slice(start, end)'**: '.slice(start, end)' returns a portion of the string starting at the index 'start' and ends (but does NOT include) the index 'end'.

_Example_
```javascript
let string = "Supercalifragilisticexpialidoscious";
console.log(string.slice(0, 5)); // Logs 'Super' to the console
```
* **'.split(separater)'**: '.split(separator)' splits the string by the 'separator' and returns an array with each portion at a different index.

_Example_
```javascript
let string = "Supercalifragilisticexpialidoscious";
console.log(string.split('i')); // Logs ['Supercal', 'frag', 'l', 'st', 'cexp', 'al', 'dosc', 'ous']
```
There are many more [string methods] available.

## Conditional logic
Conditional logic sets parameters that must be fulfilled in order for certain code to execute. Syntactically it is accomplished by one of the two following methods:
* **'if(condition1)...if else(condition2)...else'**: 'if(condition1)...if else(condition2)...else' statements will only execute the code within their respective block if the coresponding conditions are met.

_Example_
```javascript
if (iAmHandsome) {
  // if iAmHandsome is true this code will execute
}

if (iAmNotHandsome) {
  // if iAmNotHandsome is true this code will execute
} else {
  // if iAmNotHandsome is NOT true, this code will execute
}

if (everyoneIsHandsome) {
  // if everyoneIsHandsome is true this will execute
} else if (!everyoneIsHandsome) {
  // if everyoneIsHandsome is NOT true this code will execute
} else {
  // if both conditions are not true, this code will execute
}
```
* **'switch'**: 'switch' statements evaluate and expression and execute code coresponding to the result.

_Example_
```javascript
switch (expression) {
  case result1:
    // Code to execute if result1 is received
    break;
  case result2:
    // Code to execute is result2 is received
    break;
  default:
    // Code that runs if all other results are incorrect
}
```
## Loops
Loops allow for the running of a single block of code multiple times until a condition is met. The most common loops are:
* **'for'**: 'for' loops repeat a block of code until a condition is met.

_Example_
```javascript
// This loop repeats while i <= 5, if it is not, the loop ends
for (let i = 0; i <= 5; i++) {
  console.log(i); // Logs 0\n1\n2\n3\n4\n5
}
```
* **'for...in'**: 'for...in' loops are used to iterate thrugh objects and enables you to access each key and its property.

_Example_
```javascript
let car = {
  make: "Toyota",
  model: "Prius",
  year: 2023
}

for (let key in car) {
  console.log(`${key}: ${car[key]}`); // Logs 'make: Toyota'\n'model: Prius'\n'year: 2023'
}
```
* **'while'**: 'while' loops run while a certain condition is true.

_Example_
```javascript
let haveArrived = false;
let step = 0;
while (!haveArrived) { // While haveArrives is false
  step += 1; // take another step
  if (step === 10) { // If I have taken ten steps
    haveArrived = true; // Switch haveArrived to true
  }
}
```
## Functions
Functions define blocks of code that can then be referenced at any time. This allows us to repeat less code. Functions can take in **parameters** which we can then manipualte in our desired manner. When the function is invoked, we supply it with the proper arguments corresponding with its needed parameters.

_Example_
```javascript
let add = (num1, num2) => {
  return num1 + num2;
}

console.log(add(1, 2)); // Logs '3' to the console
console.log(add(4, 1)); // Logs '5' to the console
```

Creating functions in this manner also has the added benefit of making our code more **readable**.
## Arrays/Array Methods
Arrays are a complex data type that allowe for the storage and manipulation of varios types of data.
Syntacticly we create an array in javascript as follows:
```javascript
let array = [1, 'Apple', 0.5, {willILangMyFirstCodingJob: true}, [1, 2, 3]];
```
If we were not aware what was in the array we were receiving, we could use a for loop to log the values:
```javascript
let array = [1, 'Apple', 0.5, {willILangMyFirstCodingJob: true}, [1, 2, 3]];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // This will log all the array values in turn except array[3] will log '[object, object]'. Why that is is out of the scope of this document.
}
```
In the above code we reference the property '.length' of the array. This property returns the length of the array. This count, unlike the index, starts at '1'.

Arrays also have a wide varaiety of methods available for accessing and processing the data inside. Some of the most common are:
* **'.forEach((element, index, array) => {callBack})'**: '.forEach((element, index, array) => {callBack})' steps through the array (much like the for loop above), and applies the callBack to the current element.

_Example_
```javascript
let nums = [1, 2, 3];
let sum = 0;

nums.forEach((number, index, nums) => {
  sum += number;
})
```
* **'.map((value) => {})'**: '.map((value) => {})' returns an array of the results of the callback function applied to each element.

_Example_
```javascript
let nums = [1, 2, 3]

let squaredNums = nums.map((number) => {
  return number**2;
})

console.log(squaredNums); // Logs '[1, 4, 9]'
```

There are several other [array methods] available for use.
## Objects (properties/methods)
Objects are one of the basic data types in JavaScript. Objects access properties or methods through a key/value pairing system. Each 'key' is a string that allows access to the coresponding property/method as follows:
```javascript
let car = {
  color: 'red',
  start: false,
  position: 0,
  go: function() {
    if (this.start) {
      this.position += 1;
      console.log(`Position is now '${this.position}'`)
    } else {
      console.log('You must start your car first!');
    }
  },
  startCar: function() {
    this.start = true;
    console.log('Car has started!')
  }
}

console.log(car.color); // Logs 'color' prperty 'red' to the console
console.log(car['start']); // Logs 'false'
car.go(); // Logs 'You must start your car first!'
car.startCar(); // Logs 'Car has started!'
car.go(); // Logs `Position is now '1'`
car.go(); // Logs `Position is now '2'`
car.go(); // Logs `Position is now '3'`
```
We are able to create properties, and methods to manipulate those properties. See [MDN Objects] documentation for a more indepth discussion on the subject.

[git cheat sheet]: https://education.github.com/git-cheat-sheet-education.pdf
[hoisted]: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
[string methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[array methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[MDN Objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
