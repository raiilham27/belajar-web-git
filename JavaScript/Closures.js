// Local Variables
// A local variable is a "private" variable defined inside a function.

// A function can access all variables in the local scope.

// Example
// a is a local variable defined inside the function:

// function myFunction() {
//   let a = 4;
//   return a * a;
// }
// Global Variables
// A global variable is a "public" variable defined outside a function.

// A function can access all variables in the global scope:

// Example
// a is global variable defined outside the function:

// let a = 4;
// function myFunction() {
//   return a * a;
// }
// In a web page, global variables belong to the page.

// Global variables can be used (or changed) by all scripts in the page.

// A local variable can only be used inside the function where it is defined. It is private and hidden from other functions and other scripting code.

// Global and local variables with the same name are different variables. Modifying one, does not modify the other.

// Note
// Undeclared variables (created without a keyword var, let, const), are always global, even if they are created inside a function.

// Example
// The variable a is a global variable because it is undeclared:

// function myFunction() {
//   a = 4;
// }