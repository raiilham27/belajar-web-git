// Asynchronous JavaScript
// The examples used in the previous chapter, was very simplified.

// The purpose of the examples was to demonstrate the syntax of callback functions:

// Example
// function myDisplayer(something) {
//   document.getElementById("demo").innerHTML = something;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// In the example above, myDisplayer is the name of a function.

// It is passed to myCalculator() as an argument.

// In the real world, callbacks are most often used with asynchronous functions.

// A typical example is JavaScript setTimeout().

// Waiting for a Timeout
// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

// Example
// setTimeout(myFunction, 3000);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "I love You !!";
// }