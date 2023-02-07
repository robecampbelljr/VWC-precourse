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

To ***declare*** a variable to create a container in memory to which we can then ***assign*** that variable a value. A value can be one of the aforementioned
basic data types or other complex data types (i.e. arrays). These values we ***assign*** can later be referenced, manipulated, or reassigned throughout the code.

In JavaScript there are three methods to ***declaring*** a variable:
* _**var**_:  _var_'s are *function scoped* meaning the variable is [hoisted] to the top of the function. This allows access to the variable before it is defined.
* _**let**_: _let_'s are *block scoped* meaning they are *NOT* [hoisted]. Thus are only available within the block in which they were declared.

_Example_
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

 To ***assign*** a variable, we follow the ***declaration*** with the '=' sign followed by the value. We can ***assign*** multiple variables in teh same line, or use multiple lines.

 _Example_
    ``` javascript
    let x = 1, y = 2, z = 3; // Declare and assign multiple on same line

    // OR

    let x = 1;
    let y = 2;
    let z = 3;
    ```
[hoisted]: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting