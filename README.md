# VWC-precourse
[Vets Who Code pre-course work](https://dev.to/vetswhocode/vets-who-code-pre-work-1gld)

This project was prepared as proof of understanding of the following basic programming concepts:
* Variable assignment
* Basic Math operations
* Strings
* Conditional logic
* Loops
* Functions
* Arrays
* String/Array methods
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

In JavaScript there are three ways to ***declaring*** a variable:
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

## Strings
A strign is a series of carachters contained withing a set of single ('') or double ("") quotes. A string, like and array, is 0 indexed. This means that we can access any character within a string by using that characters index.

_Example_

```javascript
let name = "Robert"; // Declare a variable 'name' and assign it the value "Robert"
console.log(name[0]); // Logs 'R' to the console
console.log(name[1]); // Logs 'o' to the console
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

## Conditional logic
## Loops
## Functions
## Arrays
## String/Array methods
## Objects (properties/methods)
[hoisted]: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting