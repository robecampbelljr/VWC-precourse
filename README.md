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

Assigning a variable is to create a container in memory pertaining to one of these basic data structures (or complex data structure)
that can be called or manipulated within a program.
  In JavaScript there are two methods to assigning a variable:
  * _*var*_:  _*var*_'s are *function scoped* meaning the variable is [hoisted] to the top of the function. This allows access to the variable before it is defined.
  * _*let*_: _*let*_'s are *block scoped* meaning they are *NOT* [hoisted]. Thus are only available within the block in which they were declared.
  *Ex.*
    ``` javascript
    if (true) {
      var hw = 'Hello World!';
    }

    console.log(hw); // logs 'Hello World!' to console

    if (true) {
      let gw = 'Goodbye World!'
    }

    console.log(gw); // ReferenceError: gw is not defined
    ```

[hoisted]: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting