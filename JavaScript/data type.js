// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

// The Object Datatype
// The object data type can contain both built -in objects, and user defined objects:

// Built -in object types can be:

// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.// Numbers:
// let length = 16;
// let weight = 7.5;

// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";

// // Booleans
// let x = true;
// let y = false;

// // Object:
// const person = { firstName: "John", lastName: "Doe" };

// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object:
// const date = new Date("2022-03-25");


// The Concept of Data Types
// In programming, data types is an important concept.

// To be able to operate on variables, it is important to know something about the type.

// Without data types, a computer cannot safely solve this:
// let x = 16 + "Volvo";
// Does it make any sense to add "Volvo" to sixteen ? Will it produce an error or will it produce a result ?

//     JavaScript will treat the example above as:

// let x = "16" + "Volvo"; Example
// let x = 16 + "Volvo";
// Example
// let x = "Volvo" + 16;
// JavaScript evaluates expressions from left to right.Different sequences can produce different results:

// JavaScript:
// let x = 16 + 4 + "Volvo";
// Result:

// 20Volvo
// JavaScript:
// let x = "Volvo" + 16 + 4;
// Result:

// Volvo164
// In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

// In the second example, since the first operand is a string, all operands are treated as strings.

//     ADVERTISEMENT

// JavaScript Types are Dynamic
// JavaScript has dynamic types.This means that the same variable can be used to hold different data types:

// Example
// let x;       // Now x is undefined
// x = 5;       // Now x is a Number
// x = "John";  // Now x is a String
// JavaScript Strings
// A string(or a text string) is a series of characters like "John Doe".

// Strings are written with quotes.You can use single or double quotes:

// Example
// // Using double quotes:
// let carName1 = "Volvo XC60";

// // Using single quotes:
// let carName2 = 'Volvo XC60';
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Example
// // Single quote inside double quotes:
// let answer1 = "It's alright";

// // Single quotes inside double quotes:
// let answer2 = "He is called 'Johnny'";

// // Double quotes inside single quotes:
// let answer3 = 'He is called "Johnny"';
// You will learn more about strings later in this tutorial.

// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers(floating point).

// Numbers can be written with, or without decimals:

// Example
// // With decimals:
// let x1 = 34.00;

// // Without decimals:
// let x2 = 34;